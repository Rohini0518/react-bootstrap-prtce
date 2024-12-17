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

  };
 const onPause=(event)=>{
  console.log(event.target.getCurrentTime())
  setCurrentTime(event.target.getCurrentTime())
 }

 const handleResume=(event)=>{
  playerRef.current.seekTo(50);
  playerRef.current.playVideo();
 }

function onEnd(event){
  setVideoEnded(true);
 }

  const handlePlay = () => {
    playerRef.current.playVideo();
  };
  const handlePause = () => {
    playerRef.current.pauseVideo();
  };

  const handleReset = () => {
    playerRef.current.seekTo(0);
    playerRef.current.pauseVideo();
  };

  const handleRepeat = () => {
    playerRef.current.seekTo(0);
    playerRef.current.playVideo();
    setVideoEnded(false);

  };
  const handleVolumeUp = () => {
      const currentVolume = playerRef.current.getVolume(); 
      const newVolume = Math.min(currentVolume + 10, 100); 
      playerRef.current.setVolume(newVolume);
      console.log("Volume Up:", newVolume);
  };
  const handleVolumeDown = () => {
  const currentVolume=playerRef.current.getVolume();
  const newVolume=Math.max(currentVolume-10,0);
  playerRef.current.setVolume(newVolume);
};

 const handleForward=()=>{
  const newTime = playerRef.current.getCurrentTime() + 10; // Add 10 seconds
  playerRef.current.seekTo(newTime,true);
  playerRef.current.playVideo();
 }
 const handleBackward=()=>{
  const newTime=playerRef.current.getCurrentTime()-10;
  playerRef.current.seekTo(newTime,true);

 }
  const regularButtons = [
    { label: "Play", onClick: handlePlay },
    { label: "Pause", onClick: handlePause },
    { label: "Reset", onClick: handleReset },
    { label: "Resume Timestamp", onClick: handleResume },
    { label: "👉 Forward", onClick: handleForward },
    { label: "👈 Backward", onClick: handleBackward },
    { label: "VolumeUp", onClick: handleVolumeUp },
    { label: "VolumeDown", onClick: handleVolumeDown },

    

    ,
  ];

  return (
    <div>
      <YouTube videoId="A5QEcmWLDVM" opts={opts} onReady={onReady} onEnd={onEnd} onPause={onPause}/>
      {videoEnded && <button
            onClick={handleRepeat}
            className="rounded border bg-red-500 p-2 m-4 hover:text-yellow-300"
          >
            Repeat
          </button>}

      {regularButtons.map((button, index) => (
      <button
        key={index}
        onClick={button.onClick}
        className="m-4 text-red-700 font-bold py-2 px-4 border border-blue-500 rounded hover:bg-red-500 hover:text-yellow-300"
      >
        {button.label}
      </button>
    ))}
     
    
    </div>
  );
}