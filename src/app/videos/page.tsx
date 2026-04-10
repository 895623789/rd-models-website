"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

/* ============================================================
   DATA
   ============================================================ */
const videoUrls = [
  "https://rdmodels.com/wp-content/uploads/2026/03/Vid-1.mp4",
  "https://rdmodels.com/wp-content/uploads/2026/03/1-2.mp4",
  "https://rdmodels.com/wp-content/uploads/2026/03/The-Amelias.-modelmaker-modelmaking-miniatures-buildingmodel-art.mp4",
  "https://rdmodels.com/wp-content/uploads/2026/03/The-Before-After-LookResort-Project-in-Goamodelmaking-architecture-interiormodelmaking-inte.mp4",
  "https://rdmodels.com/wp-content/uploads/2026/03/Presenting-our-latest-architectural-model-of-B2-Bypass-Road-Jaipur-–-one-of-the-citys-busiest-.mp4",
  "https://rdmodels.com/wp-content/uploads/2026/03/Our-journey-with-the-Museum-of-the-Future-model-was-a-true-test-of-patience.-Right-from-the-star.mp4",
  "https://rdmodels.com/wp-content/uploads/2026/03/New-new-newmodelmaking-architecture-interiormodelmaking-interiors-modelmakingskills-ins.mp4",
  "https://rdmodels.com/wp-content/uploads/2026/03/Model-of-World-Street.modelmaking-architecture-interiormodelmaking-interiors-modelmakingsk.mp4",
  "https://rdmodels.com/wp-content/uploads/2026/03/Introducing-the-newest-addition.-⭐modelmaking-architecture-interiormodelmaking-interiors-m.mp4",
  "https://rdmodels.com/wp-content/uploads/2026/03/Dreams-do-come-true-As-an-architect-creating-a-model-of-Mirai-House-designed-by-the-legendary.mp4",
  "https://rdmodels.com/wp-content/uploads/2026/03/A-model-inspired-by-the-classics-built-for-the-future.@akshatapartmentsmodelmaking-architect.mp4",
  "https://rdmodels.com/wp-content/uploads/2026/03/thats-how-we-do-it-💪📦-BTS-ModelDeliverymodelmaking-architecture-interiormodelmaking-.mp4",
  "https://rdmodels.com/wp-content/uploads/2026/03/VID_20211006_184956.mp4",
  "https://rdmodels.com/wp-content/uploads/2026/03/VID_20250623_040321_603.mp4"
];

/* ============================================================
   INDIVIDUAL VIDEO COMPONENT (Performance Optimized)
   ============================================================ */
function VideoCard({ url, index }: { url: string; index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const inView = useInView(containerRef, { margin: "0px 0px -20% 0px" });
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // Play/pause logic based on viewport intersect to save bandwidth
  useEffect(() => {
    if (inView && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
      }
    } else if (!inView && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [inView]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative w-full aspect-[4/5] sm:aspect-square md:aspect-[3/4] bg-[var(--bg-snow)] rounded-[var(--radius-lg)] overflow-hidden shadow-sm border border-[var(--border-subtle)]"
    >
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[var(--bg-paper)]">
          <div className="w-8 h-8 rounded-full border-2 border-t-[var(--text-charcoal)] border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
        </div>
      )}

      <video
        ref={videoRef}
        src={url}
        muted={isMuted}
        loop
        playsInline
        preload="none"
        onLoadedData={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Hover Controls Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          
          <button 
            onClick={() => {
              if (videoRef.current) {
                if (isPlaying) { videoRef.current.pause(); setIsPlaying(false); }
                else { videoRef.current.play(); setIsPlaying(true); }
              }
            }}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors"
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-1" />}
          </button>

          <div className="flex gap-2">
            <button 
              onClick={() => setIsMuted(!isMuted)}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <button 
              onClick={() => {
                if (videoRef.current) {
                  if (videoRef.current.requestFullscreen) {
                    videoRef.current.requestFullscreen();
                  }
                }
              }}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors"
            >
              <Maximize className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </motion.div>
  );
}


/* ============================================================
   PAGE COMPONENT
   ============================================================ */
export default function VideosPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen bg-[var(--bg-snow)]">
      {/* ━━━━━━ HEADER ━━━━━━ */}
      <section className="structural-container mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-[var(--font-accent)] text-xs tracking-[0.2em] uppercase text-[var(--text-muted)] mb-6">
            In Motion
          </p>
          <h1 className="display-hero mb-6 text-[var(--text-charcoal)]">
            Our Video Gallery
          </h1>
          <p className="text-prose max-w-2xl mx-auto">
            Experience our architectural models brought to life. Watch the intricate details, meticulous craftsmanship, and the dynamic presence of our 3D scale models.
          </p>
        </motion.div>
      </section>

      {/* ━━━━━━ VIDEO GRID ━━━━━━ */}
      <section className="structural-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {videoUrls.map((url, index) => (
            <VideoCard key={index} url={url} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
