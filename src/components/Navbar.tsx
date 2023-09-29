import { NavLink } from "react-router-dom"
import { useAppSelector } from '../App/Hooks';
import logo from '../assets/logo/png/logo-color.png'
const Navbar = () => {
  const Cartnum=useAppSelector((state)=>(state.Cart));
  const Num=Cartnum.filter((e)=> e.qty>0);
  function handleToggleClick(){
    const e =document.getElementById('hidden-links');
    if(e?.getAttribute('class')?.includes('f')){
      e?.setAttribute('class','hidden-links active');
    }else{
      e?.setAttribute('class','hidden-links f');
    }
  }
  return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
  <div className="container">
    <NavLink className="navbar-brand fw-bold fs-4 " to="/E-commerce"><img  className="logo" src={logo} alt="" /></NavLink>
    <button className="navbar-toggler" onClick={handleToggleClick} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="hidden-links f" id="hidden-links" >
    <ul onClick={handleToggleClick} >
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/E-commerce">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/E-commerce/Prouducts">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/E-commerce/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/E-commerce/Contact">Contact</NavLink>
        </li>
      </ul>
      <div className="buttons">
        {/* <NavLink to="/login" className="btn btn-outline-dark ">Login</NavLink>
        <NavLink to="/register" className="btn btn-outline-dark ms-2">Register</NavLink> */}
        <NavLink to="/cart" className="btn"><i className="fa-solid fa-cart-shopping"></i> ({`${Num.length}`})</NavLink>
      </div>
    </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/E-commerce">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/E-commerce/Prouducts">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/E-commerce/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/E-commerce/Contact">Contact</NavLink>
        </li>
      </ul>
      <div className="buttons">
        {/* <NavLink to="/login" className="btn btn-outline-dark ">Login</NavLink>
        <NavLink to="/register" className="btn btn-outline-dark ms-2">Register</NavLink> */}
        <NavLink to="/E-commerce/cart" className="btn"><i className="fa-solid fa-cart-shopping"></i> ({`${Num.length}`})</NavLink>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar