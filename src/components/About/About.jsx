import './About.css'
import server from '../../assets/server.jpg'
import play from '../../assets/play.png'

export default function About({setPlay}) {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={server} alt='' className='about-img'/>
        <img src={play} alt='' className='play-icon' onClick={() => {setPlay(true)}}/>
      </div>
      <div className='about-right'>
        <h3>ABOUT DUODIAG</h3>
        <h2>A step further into innovations of healthcare software</h2>
        <p>Duo Diagnosticsware is an organisation that provide medical diagnostics software to helps improvise workflow in hospitals and deliver satisfactory diagnosis for patients.</p>
        <p>Duo Diagnosticsware involved in building and delivering products, systems, services, and solutions within a medical diagnostics space. We provide secure applications to process and store patient diagnostics information.</p>
      </div>
    </div>
  )
}
