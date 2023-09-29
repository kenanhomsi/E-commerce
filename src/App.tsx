import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import {Route,Routes} from 'react-router-dom'
import Prouducts from './components/Prouducts'
import Product from './components/Product'
import Cart from './components/Cart'
import About from './components/About'
import Contact from './components/Contact'
function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route  path='/E-commerce' Component={Home} />
      <Route  path='/E-commerce/Prouducts' Component={Prouducts} />
      <Route  path='/E-commerce/Prouducts/:id' Component={Product} />
      <Route  path='/E-commerce/Cart' Component={Cart} />
      <Route  path='/E-commerce/About' Component={About} />
      <Route  path='/E-commerce/Contact' Component={Contact} />
    </Routes>
    </>
  )
}

export default App
