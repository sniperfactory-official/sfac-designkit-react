import React from 'react';
import './styles/sfac-player.css';

interface SFACPlayerProps {
  src: string;
}

const SFACPlayer: React.FC<SFACPlayerProps> = ({src}) => {
  return (
    <div>
      <video className="sfac-player" controls>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag. ss
      </video>
    </div>
  );
};

export default SFACPlayer;
