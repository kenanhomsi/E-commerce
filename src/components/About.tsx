import icone1 from '../assets/markas/Adidas-logo.webp'
import icone2 from '../assets/markas/Untitled-design-4-500x500.png'
import icone3 from '../assets/markas/armani-1024x576.jpg'
import icone4 from '../assets/markas/download.jpeg'
import icone5 from '../assets/markas/download.png'
import icone6 from '../assets/markas/swoosh-logo-black.jpeg'

const About = () => {
  return (
    <div className="About" id='About'>
        <div className="up">
            <img src={icone1} alt="" />
            <img src={icone2} alt="" />
            <img src={icone3} alt="" />
            <img src={icone4} alt="" />
            <img src={icone5} alt="" />
            <img src={icone6} alt="" />
        </div>
        <div className="down">
            <h2>Subscibe and get reward</h2>
            <input type="email" name="" id="" />
            <button>submit</button>
        </div>
        

    </div>
  )
}

export default About