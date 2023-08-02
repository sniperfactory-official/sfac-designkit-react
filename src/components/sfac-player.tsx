import React from 'react';
import './styles/sfac-player.css';
import SFACPlayerProps from './SFACPlayerProps';

const SFACPlayer: React.FC<SFACPlayerProps> = ({url}) => {
  return (
    <div>
      <video className="sfac-player" controls>
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag. ss
      </video>
    </div>
  );
};

export default SFACPlayer;