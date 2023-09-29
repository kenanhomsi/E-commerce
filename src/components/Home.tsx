import image from '../assets/f9131ff3698e18eff37061ab49356f7b.jpg'
import About from './About'
import Contact from './Contact'
import Gallery from './Gallery'
import Prouducts from './Prouducts'
import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <div className="hero" id='home'>
        <div className="home ">
            <div className='img'>
            <img src={image}  alt="background" />
            </div>
                <div className="container">
                    <h1 >Designs that tell a story</h1>
                    <p> A Creative nation with a storied history steeped in fabic mills that once exported some of the finest fabric around the globle</p>   
                    <NavLink className='Home-btn' to='/E-commerce/Prouducts'>Show All <i className="fa-solid fa-arrow-right"></i></NavLink> 
                </div>
        </div>
          <Gallery />
          <Prouducts />
          <About />
          <Contact />
        
    </div>
  )
}

export default Home