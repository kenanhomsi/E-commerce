import {useEffect,useState} from "react"
import Skeleton from 'react-loading-skeleton';
import '../../node_modules/react-loading-skeleton/dist/skeleton.css'
import { NavLink } from "react-router-dom"
export type Products={
category: string,
description:string, 
id: number,
image:string, 
price: number, 
rating:{
rate: number,
 count: number
}
title:string 
}
const Prouducts = () => {
  const [data,setData]=useState<[Products]|[]>([]);
  const [filter,setFilter]=useState<Products[]>(data);
  const [loading,setLoading]=useState(false);
  let componentMounted:boolean=true;

  useEffect(()=>{
        const getProducts= async ()=>{
            setLoading(true);
            const response= await fetch ('https://fakestoreapi.com/products');
            if(componentMounted){
                setData(await response.clone().json());
                setFilter( await response.json());
                setLoading(false);
            }
            return ()=>{
                // eslint-disable-next-line react-hooks/exhaustive-deps
                componentMounted=false;
            }
        }
        getProducts();
  },[])
    const Loading =()=>{
        return (
            <>
               <div className="col-md-3">
                <Skeleton height={350}/>
               </div>
               <div className="col-md-3">
                <Skeleton height={350} />
               </div>
               <div className="col-md-3">
                <Skeleton height={350}  />
               </div>
               <div className="col-md-3">
                <Skeleton  height={350}/>
               </div>

            </>
        )
    }
    const filterProduct=(cat:string)=>{
        const updatedList=data.filter((x)=> x.category === cat);
        setFilter(updatedList);
    }
    function SortProducts(number:number){ 
        const filteredProduct=data.filter((e)=> number === 201 ? e.price > number : e.price < number);
        setFilter(filteredProduct);
      }
    const ShowProducts=()=>{
        return(
            <>
            <div className="buttons  mb-5 pb-5">
                <button className="btn" onClick={()=> setFilter(data)}> All</button>
                <button className="btn" onClick={()=> filterProduct("men's clothing")} > Men's Clothing </button>
                <button className="btn" onClick={()=> filterProduct("women's clothing")}> Women's Clothing </button>
                <button className="btn" onClick={()=> filterProduct("jewelery")}> Jewelery</button>
                <button className="btn" onClick={()=> filterProduct("electronics")}>Electronic</button>
                <button className="btn" onClick={()=> SortProducts(50)}>under $50</button>
                <button className="btn" onClick={()=> SortProducts(100)}>under $100</button>
                <button className="btn" onClick={()=> SortProducts(200)}>under $200</button>
                <button className="btn" onClick={()=> SortProducts(201)}>$200 and more</button>
            </div>
            {filter.map((product)=>{
                return(
                    <div className="col-md-4 col-lg-3  mb-4"  key={product.id}>
                        <div className=" product-card " key={product.id}>
                                <img src={product.image} className="card-img-top" alt={product.title} height='250px'/>
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title.substring(0,12)} ...</h5>
                                    <p className="card-text lead fw-bold">$ {product.price}</p>
                                    <NavLink to={`/E-commerce/Prouducts/${product.id}`} className="btn ">Buy Now</NavLink>
                                </div>
                        </div>

                    </div>
                )
            })}
            </>
        )
    }
    return (
    <div className="Products">
        <div className="container my-5 py-5 ">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className="display-6 fw-border text-center">Latest Products</h1>
                    <hr />
                </div>
            </div>
            <div className="row justify-content-center">
                {loading ? <Loading /> : <ShowProducts/>}
            </div>
        </div>
    </div>
  )
}

export default Prouducts