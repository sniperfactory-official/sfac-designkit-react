import React from "react";

interface ControlPlayPauseProps {
  onPlay: () => void;
  onPause: () => void;
  playing: boolean;
}

const ControlPlayPause: React.FC<ControlPlayPauseProps> = ({
  onPlay,
  onPause,
  playing,
}) => {
  return (
    <>
      <button onClick={playing ? onPause : onPlay}>
        {playing ? "일시정지" : "재생"}
      </button>
    </>
  );
};

export default ControlPlayPause;
