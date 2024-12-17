import { useState } from "react";
import { useRef } from "react";
import YouTube from "react-youtube";

export default function YouTubeVideo() {
  const playerRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0); 
  const [videoEnded, setVideoEnded] = useState(false);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };
  const onReady = (event) => {
    playerRef.current = event.target;
    console.log(event.target.getCurrentTime())

  };
 const onPause=(event)=>{
  console.log(event.target.getCurrentTime())
  setCurrentTime(event.target.getCurrentTime())
 }

 const handleResume=(event)=>{
  playerRef.current.seekTo(20);
  playerRef.current.playVideo();
 }

function onEnd(event){
  setVideoEnded(true);
 }

  const handlePlay = () => {
    console.log(playerRef.current);
    playerRef.current.playVideo();
  };
  const handlePause = () => {
    console.log(playerRef.current);
    playerRef.current.pauseVideo();
    

  };

  const handleReset = () => {
    playerRef.current.seekTo(0);
    playerRef.current.pauseVideo();

  };

  const handleRepeat = () => {
    playerRef.current.seekTo(0);
    playerRef.current.playVideo();
  };

  const regularButtons = [
    { label: "Play", onClick: handlePlay },
    { label: "Pause", onClick: handlePause },
    { label: "Reset", onClick: handleReset },
    ,
  ];

  return (
    <div>
      <YouTube videoId="A5QEcmWLDVM" opts={opts} onReady={onReady} onEnd={onEnd} onPause={onPause}/>
      {regularButtons.map((button, index) => (
      <button
        key={index}
        onClick={button.onClick}
        className="m-4 text-red-700 font-bold py-2 px-4 border border-blue-500 rounded hover:bg-red-500 hover:text-yellow-300"
      >
        {button.label}
      </button>
    ))}
    {videoEnded && <button
            onClick={handleRepeat}
            className="m-4 text-red-700 font-bold py-2 px-4 border border-blue-500 rounded hover:bg-red-500 hover:text-yellow-300"
          >
            Repeat
          </button>}
    </div>
  );
}