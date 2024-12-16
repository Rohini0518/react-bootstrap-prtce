import { useRef } from "react";
import YouTube from "react-youtube";

export default function YouTubeVideo() {
  const playerRef = useRef(null);

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
    { label: "Repeat", onClick: handleRepeat },
  ];

  return (
    <div>
      <YouTube videoId="A5QEcmWLDVM" opts={opts} onReady={onReady} />
      {buttons.map((button, index) => (
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