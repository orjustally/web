import './Projects.css'
import duohisto from '../../assets/duohisto.jpeg'
import pwlocal from '../../assets/pwlocal.png'
import come from '../../assets/come.jpg'
import slide from '../../assets/slides.png'
import password from '../../assets/password.png'
import coming from '../../assets/programming.png'

export default function Projects() {
  return (
    <div className='projects'>
      <div className='project'>
        <img src={duohisto} alt='duohisto' />
        <div className='caption'>
          <img src={slide} alt=''/>
          <p>Duo Histopath</p>
        </div>
      </div>
      <div className='project'>
        <img src={pwlocal} alt='pwlocal' />
        <div className='caption'>
          <img src={password} alt=''/>
          <p>pwL0cal</p>
        </div>
      </div>
      <div className='project'>
        <img src={come} alt='afixys' />
        <div className='caption'>
          <img src={coming} alt=''/>
          <p>Afixys</p>
        </div>
      </div>
    </div>
  )
}
