import React from 'react';

// imgIcon
import Hello from "../assets/icons/imgIcon/Hello.svg?url";
import Agree from "../assets/icons/imgIcon/Agree.svg?url";
import AI from "../assets/icons/imgIcon/AI.svg?url";
import All from "../assets/icons/imgIcon/All.svg?url";
import App from "../assets/icons/imgIcon/App.svg?url";
import AngelFace from "../assets/icons/imgIcon/AngelFace.svg?url";
import Data from "../assets/icons/imgIcon/Data.svg?url";
import Design from "../assets/icons/imgIcon/Design.svg?url";
import Disagree from "../assets/icons/imgIcon/Disagree.svg?url";
import Folder from "../assets/icons/imgIcon/Folder.svg?url";
import Game from "../assets/icons/imgIcon/Game.svg?url";
import Hit from "../assets/icons/imgIcon/Hit.svg?url";
import Link from "../assets/icons/imgIcon/Link.svg?url";
import Note from "../assets/icons/imgIcon/Note.svg?url";
import Security from "../assets/icons/imgIcon/Security.svg?url";
import Sound from "../assets/icons/imgIcon/Sound.svg?url";
import Web from "../assets/icons/imgIcon/Web.svg?url";

// strokeIcon
import Arrow from "../assets/icons/stroke/Arrow.svg?url";
import CoverBox from "../assets/icons/stroke/CoverBox.svg?url";
import Quality from "../assets/icons/stroke/Quality.svg?url";
import SkipNext from "../assets/icons/stroke/SkipNext.svg?url";
import WideScreen from "../assets/icons/stroke/WideScreen.svg?url";
import BreadArrow from "../assets/icons/stroke/BreadArrow.svg?url";

type IconnameProps = "Hello" | "Agree" | "AI" | "All" | "App" | "AngelFace" | "Data" | "Design" | "Disagree" | "Folder" | "Game" | "Hit" | "Link" | "Note" | "Security" | "Sound" | "Web" | "Arrow" | "CoverBox" | "Quality" | "SkipNext" | "WideScreen" | "BreadArrow" ;

interface IconProps extends React.HTMLAttributes<HTMLImageElement>{
  name: IconnameProps;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function Icon({ name, alt = "", width = 21, height = 21, className = "", ...props }: IconProps) {
  const iconGroup = {
    "Hello": Hello,
    "Agree": Agree,
    "AI": AI,
    "All": All,
    "App": App,
    "AngelFace": AngelFace,
    "Data": Data,
    "Design": Design,
    "Disagree": Disagree,
    "Folder": Folder,
    "Game": Game,
    "Hit": Hit,
    "Link": Link,
    "Note": Note,
    "Security": Security,
    "Sound": Sound,
    "Web": Web,
    "Arrow": Arrow,
    "CoverBox": CoverBox,
    "Quality": Quality,
    "SkipNext": SkipNext,
    "WideScreen": WideScreen,
    "BreadArrow": BreadArrow, 
  };
  return (
    <img src={iconGroup[name]} alt={alt} width={width} height={height} className={className} />
  );
}