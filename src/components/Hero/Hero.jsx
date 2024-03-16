import './Hero.css'
import arrow from '../../assets/right-arrow.png'

export default function Hero() {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <h1>Secure Advance Tech for Healthcare</h1>
        <p>Our cutting-edge software & module is designed to empower healthcare workers with precise diagnostics deliverance</p>
        <button className='btn'>Explore more<img src={arrow} alt='arrow'/></button>
      </div>
    </div>
  )
}
