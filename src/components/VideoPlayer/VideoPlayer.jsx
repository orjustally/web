import './VideoPlayer.css'
import video from '../../assets/life.mp4'
import { useRef } from 'react'

export default function VideoPlayer({play, setPlay}) {

  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlay(false)
    }
  }

  return (
    <div className={`video-player ${play ? '': 'hide'}`} ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}
