"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles, User, Bot, Loader2 } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

/* ============================================================
   KNOWLEDGE BASE (System Instruction)
   ============================================================ */
const SYSTEM_INSTRUCTION = `
You are the Official AI Professional Consultant of RD Models (India's Premier Scale Model Maker).
Your tone must be authoritative, expert, and professional. 

### LANGUAGE RULE (CRITICAL):
Always reply in the EXACT SAME LANGUAGE the user uses.
- User speaks Hindi -> Reply in Hindi.
- User speaks Punjabi -> Reply in Punjabi.
- User speaks English -> Reply in English.
- User speaks Hinglish -> Reply in Hinglish.

### MANDATORY INITIAL LINE:
Every new conversation MUST start with:
"मैं RD Models का AI असिस्टेंट हूँ। कानूनी सुरक्षा के लिए, कृपया हमारे द्वारा की गई चर्चा को अंतिम निर्णय लेने से पहले हमारी टीम के साथ एक बार कन्फर्म (Confirm) ज़रूर कर लें।"

### STYLE GUIDELINES:
1. No raw symbols: Do not use '*' or '-' for bullets if possible, use proper markdown numbering (1, 2, 3) or bold headings.
2. Point-to-Point: Give direct answers. Do not ramble.
3. Formatting: Use **Double Asterisks** for bold headings. Use \\n\\n for paragraph breaks.

### CALL TRIGGER LOGIC:
- You must decide when a human call is necessary.
- If the user asks for pricing, specific timelines for massive projects, or seems ready to book, end your message with the hidden tag: [[CALL_TRIGGER]]
- Only use this tag when a call is genuinely helpful to close a lead.

### CORE COMPANY LORE:
- Founded: 2014 by Ar. Rohitash Daiya.
- 2300+ models delivered. 100+ craftsmen.
- Speciality: High-detail Architectural, Industrial, and Defense models.
`;

// Initialize Gemini
const API_KEY = "AIzaSyBf69IUS-R3Xe932p12lrcosgwtJDC_tuo";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ 
  model: "gemini-flash-lite-latest",
  systemInstruction: SYSTEM_INSTRUCTION,
});

// Helper component for message formatting
const FormattedMessage = ({ text }: { text: string }) => {
  // Simple markdown-ish parser for professional look
  const lines = text.replace(/\[\[CALL_TRIGGER\]\]/g, '').split('\n');
  
  return (
    <div className="space-y-3">
      {lines.map((line, i) => {
        if (!line.trim()) return <div key={i} className="h-2" />;
        
        // Handle bold headings/text
        const boldRegex = /\*\*(.*?)\*\*/g;
        const parts = [];
        let lastIndex = 0;
        let match;
        
        while ((match = boldRegex.exec(line)) !== null) {
          if (match.index > lastIndex) {
            parts.push(line.substring(lastIndex, match.index));
          }
          parts.push(<strong key={match.index} className="font-bold text-[var(--text-charcoal)]">{match[1]}</strong>);
          lastIndex = boldRegex.lastIndex;
        }
        if (lastIndex < line.length) {
          parts.push(line.substring(lastIndex));
        }

        const finalLine = parts.length > 0 ? parts : line;

        // Handle Bullet Points
        if (line.trim().startsWith('*') || line.trim().startsWith('-')) {
          return (
            <div key={i} className="flex gap-2 pl-2">
              <span className="text-[var(--text-muted)] mt-1.5">•</span>
              <span className="flex-1">{typeof finalLine === 'string' ? finalLine.replace(/^[\*\-\s]+/, '') : finalLine}</span>
            </div>
          );
        }

        return <p key={i} className="leading-relaxed">{finalLine}</p>;
      })}
    </div>
  );
};

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showCallCTA, setShowCallCTA] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Persistence
  useEffect(() => {
    const saved = localStorage.getItem('rd_chat_history');
    if (saved) {
      const parsed = JSON.parse(saved);
      setMessages(parsed);
      if (parsed.some((m: any) => m.text.includes('[[CALL_TRIGGER]]'))) {
        setShowCallCTA(true);
      }
    } else {
      setMessages([{ role: 'ai', text: "Namaste! मैं RD Models का AI असिस्टेंट हूँ। मैं आपके विज़न को हकीकत में बदलने में आपकी कैसे मदद कर सकता हूँ?" }]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('rd_chat_history', JSON.stringify(messages));
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput("");
    const newMessages = [...messages, { role: 'user', text: userMessage } as const];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const history = newMessages
        .filter((_, i) => i !== 0)
        .map(m => ({
          role: m.role === 'user' ? 'user' : 'model' as any,
          parts: [{ text: m.text }],
        }));

      const chat = model.startChat({ history });

      const result = await chat.sendMessage(userMessage);
      const response = await result.response;
      const text = response.text();
      
      if (text.includes('[[CALL_TRIGGER]]')) {
        setShowCallCTA(true);
      }
      
      setMessages(prev => [...prev, { role: 'ai', text }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'ai', text: "क्षमा करें, तकनीकी समस्या के कारण मैं अभी जवाब नहीं दे पा रहा हूँ। कृपया WhatsApp पर संपर्क करें।" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 md:bottom-28 md:right-6 z-[9990]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed inset-x-2 bottom-20 md:absolute md:inset-auto md:bottom-20 md:right-0 w-auto md:w-[450px] h-[75vh] md:h-[600px] bg-white border border-[var(--border-subtle)] rounded-[2rem] md:rounded-[var(--radius-lg)] shadow-2xl flex flex-col overflow-hidden z-[9991]"
          >
            {/* Header */}
            <div className="bg-[var(--text-charcoal)] p-4 md:p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">RD Assistant</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="text-[8px] md:text-[9px] text-white/50 uppercase font-black tracking-widest">Premium Consulting</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              data-lenis-prevent
              className="flex-1 overflow-y-auto p-4 md:p-6 space-y-5 bg-[var(--bg-snow)] overscroll-contain scroll-smooth"
            >
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[90%] p-3 md:p-4 rounded-2xl text-[12px] md:text-[13px] shadow-sm ${
                    m.role === 'user' 
                      ? 'bg-[var(--text-charcoal)] text-white rounded-tr-none' 
                      : 'bg-white border border-[var(--border-subtle)] text-[var(--text-charcoal)] rounded-tl-none'
                  }`}>
                    {m.role === 'ai' ? <FormattedMessage text={m.text} /> : m.text}
                  </div>
                </div>
              ))}

              {showCallCTA && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white border-2 border-[var(--text-charcoal)] p-4 md:p-6 rounded-2xl space-y-4 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--bg-snow)] flex items-center justify-center">
                      <Bot className="w-4 h-4 text-[var(--text-charcoal)]" />
                    </div>
                    <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-charcoal)]">Direct Line to Architect</h4>
                  </div>
                  <p className="text-[10px] md:text-[11px] text-[var(--text-slate)] leading-relaxed font-medium">
                    आपकी आवश्यकताएं तकनीकी लग रही हैं। क्या आप सटीक परामर्श के लिए हमारे प्रिंसिपल आर्किटेक्ट से सीधे बात करना चाहेंगे?
                  </p>
                  <a 
                    href="tel:+919672232299" 
                    className="flex items-center justify-center gap-3 w-full py-3 md:py-4 bg-[var(--text-charcoal)] text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-black transition-all group"
                  >
                    <span>Call Ar. Rohitash Directly</span>
                    <Send className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              )}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-[var(--border-subtle)] px-4 py-2 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-3">
                    <Loader2 className="w-4 h-4 animate-spin text-[var(--text-muted)]" />
                    <span className="text-[9px] font-black uppercase tracking-widest animate-pulse">Expert...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 md:p-5 border-t border-[var(--border-subtle)] bg-white">
              <div className="flex gap-2 md:gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about scale, timelines..."
                  className="flex-1 bg-[var(--bg-snow)] text-[12px] md:text-[13px] px-4 md:px-5 py-3 md:py-4 rounded-xl outline-none border border-transparent focus:border-[var(--text-charcoal)] transition-all"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="w-12 h-12 md:w-14 md:h-14 bg-[var(--text-charcoal)] text-white rounded-xl flex items-center justify-center transition-all disabled:opacity-50 shadow-md"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-500 border-4 ${
          isOpen ? 'bg-white border-white' : 'bg-[var(--text-charcoal)] border-white md:border-[var(--bg-snow)]'
        }`}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, scale: 0 }} animate={{ rotate: 0, scale: 1 }} exit={{ rotate: 90, scale: 0 }}>
              <X className="w-6 h-6 md:w-7 md:h-7 text-[var(--text-charcoal)]" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, scale: 0 }} animate={{ rotate: 0, scale: 1 }} exit={{ rotate: -90, scale: 0 }}>
              <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && <span className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-red-500 border-2 border-white rounded-full animate-pulse" />}
      </button>
    </div>
  );
}
