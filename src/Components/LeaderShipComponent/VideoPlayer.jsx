import { useRef, useState } from "react";
import video from "/HomePage/LeadershipSection/video.mp4";
import { Play } from "lucide-react";
import poster from "/HomePage/LeadershipSection/poster.webp";

export default function VideoPlayer({ videoRef, overlayVideoRef }) {
  // const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl border border-white/10 h-full"
      data-aos="zoom-in"
      data-aos-delay="500"
    >
      <video
        preload="none"
        poster={poster}
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={video}
        muted
        playsInline
        controls={false}
      />
      {/* Overlay */}
      <div
        ref={overlayVideoRef}
        className="absolute inset-0 bg-white z-10"
      ></div>
      {/* "absolute inset-0 z-10 ",
                    "transition duration-300 group-hover:bg-transparent" */}
      {!isPlaying && (
        <button
          onClick={handlePlayPause}
          className="absolute inset-0 flex items-center justify-center bg-primary/40 hover:bg-hover/20 transition"
        >
          <div className="bg-primary text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform">
            <Play className="w-6 h-6" />
          </div>
        </button>
      )}

      {isPlaying && (
        <button onClick={handlePlayPause} className="absolute inset-0"></button>
      )}
    </div>
  );
}
