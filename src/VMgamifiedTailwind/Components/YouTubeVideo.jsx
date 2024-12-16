import { useRef } from 'react';
import YouTube from 'react-youtube';

export default function YouTubeVideo(){

    const playerRef= useRef(null);

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 0,
        },
      };
      const onReady = (event) => {
        playerRef.current=event.target;
      };

      const handlePlay=()=>{
        console.log(playerRef.current);
        playerRef.current.playVideo();
      }
      const handlePause=()=>{
        console.log(playerRef.current);
        playerRef.current.pauseVideo();
      }

      const handleReset=()=>{
        playerRef.current.seekTo(0)
        playerRef.current.pauseVideo();
      }
    
      const handleRepeat=()=>{
        playerRef.current.seekTo(0)
        playerRef.current.playVideo()
      }

    return(
        <div>
   <YouTube videoId="A5QEcmWLDVM" opts={opts} onReady={onReady} />
   <button onClick={handlePlay} className="m-4 text-red-700 font-bold  py-2 px-4 border border-blue-500 rounded hover:bg-red-500 hover:text-yellow-300">
  Play
</button>    <button onClick={handlePause} className="m-4 text-red-700 font-bold  py-2 px-4 border border-blue-500 rounded hover:bg-red-500 hover:text-yellow-300">
  Pause
</button>   <button onClick={handleReset}  className="m-4 text-red-700 font-bold  py-2 px-4 border border-blue-500 rounded hover:bg-red-500 hover:text-yellow-300">
  Reset
</button>   <button onClick={handleRepeat} className="m-4 text-red-700 font-bold  py-2 px-4 border border-blue-500 rounded hover:bg-red-500 hover:text-yellow-300">
  Repeat
</button>  


        </div>
    )
}