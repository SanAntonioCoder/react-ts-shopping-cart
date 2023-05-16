import { useState } from "react";
import "./Video.css";

const Video = () => {
  const [showSymbol, setShowSymbol] = useState(false);

  const handleSymbolFadeIn = () => {
    setShowSymbol(true);
  };

  const handleSymbolFadeOut = () => {
    setShowSymbol(false);
  };

  return (
    <div className="video-container">
      <video
        className="video"
        autoPlay
        playsInline
        muted
        src="/imgs/run.mp4"
        controls
        onPlay={handleSymbolFadeIn}
        onEnded={handleSymbolFadeOut}
      />
      {/* {showSymbol && <div className="nike-symbol"></div>} */}
      <div className={`nike-symbol ${showSymbol ? "fade-in" : "fade-out"}`} />
    </div>
  );
};

export default Video;
