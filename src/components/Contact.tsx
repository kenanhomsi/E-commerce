import logo from '../assets/logo/png/logo-color.png'
import { NavLink } from 'react-router-dom'
const Contact = () => {
  return (
    <div className="Contact" id='Contact'>
        <div className="col-1">
            <img src={logo} alt=""/>
            <h2>
                what ever you want from <span>A to Z</span>, <br />will find it here.
            </h2>
        </div>
        <div className="col-2">
            <h2>Links</h2>
            <p> <a className='link' href='#home'>Home</a></p>
            <p> <NavLink className='link' to={'/E-commerce/Prouducts'}>Products</NavLink></p>
        </div>
        <div className="col-3">
            <h2>Help</h2>
            <p>call us</p>
            <p>Sales Team</p>
            <p>User Agreement</p>
            <p>To transfer content</p>
            <p>Safety rules</p>
        </div>

    </div>
  )
}

export default Contact