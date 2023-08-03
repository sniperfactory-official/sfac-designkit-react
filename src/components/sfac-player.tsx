import React, { useState } from "react";
import "./styles/sfac-player.css";
import SFACPlayerProps from "./SFACPlayerProps";
import ControlPlayPause from "./controller/ControlPlayPause";

const SFACPlayer: React.FC<SFACPlayerProps> = ({ url }) => {
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  return (
    <div>
      <video className="sfac-player" controls>
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag. ss
      </video>

      <ControlPlayPause
        onPlay={handlePlay}
        onPause={handlePause}
        playing={playing}
      />
    </div>
  );
};

export default SFACPlayer;
