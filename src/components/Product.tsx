import { useState,useEffect } from "react"
import { NavLink, useParams } from "react-router-dom"
import type { Products } from "./Prouducts";
import Skeleton from "react-loading-skeleton";
import '../../node_modules/react-loading-skeleton/dist/skeleton.css'
import { useAppDispatch } from '../App/Hooks'
import {AddItem} from '../reduxToolkit/Cart/cartSilce'

const Product = () => {
    const dispatch=useAppDispatch();


    const {id}=useParams();
    const [product,setProduct]=useState<Products |any>();
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        const getProducts= async ()=>{
            setLoading(true);
            const response= await fetch (`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProducts();
  },[])
  const Loading=()=>{
    return(
        <>
        <div className="col-md-6">
            <Skeleton height={400} />
            
        </div>
        <div className="col-md-6" style={{lineHeight:2}}>
            <Skeleton height={50}  width={300}/>
            <Skeleton height={75} />
            <Skeleton height={25}  width={150}/>
            <Skeleton height={50} />
            <Skeleton height={150} />
            <Skeleton height={50}  width={100}/>
            <Skeleton height={50}  width={100} style={{marginLeft:6}}/>
        </div>
        </>
    )
  }
  function HandleAddClick(){
    dispatch(AddItem(product.id));
    const x :any= document.getElementById('alert-add');
    x.style.display="block";
  }
  function handleBlur(){
    const x:any= document.getElementById('alert-add');
    x.style.display="none";
  }
  const ShowProduct=()=>{
    return(
        
      <>
         <div className="alert-add" id="alert-add">
        <i className="fa-solid fa-circle-check"></i> {product.title} Added to Cart
        </div>
        <div className="left">
            <img src={product.image} alt={product.title} height='400px' width='400px' />
        </div>
        <div className="right" key={product.id}>
            <h4 className="text-uppercase text-black-50">{product.category}</h4>
            <h1 className="display-5">{product.title}</h1>
            <p className="lead fw-bolder">Rating {product.rating && product.rating.rate}</p>
            <h3 className="display-6 fw-bolder my-4">${product.price}</h3>
            <p className="lead"> {product.description}</p>
            <button className="btn" onClick={HandleAddClick} onMouseLeave={handleBlur} >Add to Cart</button>
            <NavLink to='/E-commerce/Cart' className="btn">GO to Cart</NavLink>
        </div> </>
        
       
    )
  }
  return (
    <div className="Product-alone">
                {loading ? <Loading />: <ShowProduct />}
    </div>
  )
}

export default Product