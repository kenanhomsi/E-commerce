import { useAppSelector,useAppDispatch } from '../App/Hooks';
import type { Products } from './Prouducts';
import { DeleteItem ,DeleteAllItem,AddItem} from '../reduxToolkit/Cart/cartSilce';
// import Skeleton from "react-loading-skeleton";
// import '../../node_modules/react-loading-skeleton/dist/skeleton.css'

type CartType={
  Product:Products,
  qty:number
}
const Cart = () => {
  const dispatch=useAppDispatch();
  const Cartnum=useAppSelector((state)=>(state.Cart));
  const Num=Cartnum.filter((e)=> e.qty>0);

    let x=0;
    Num.map((e)=>(
      x+=e.Product.price *e.qty))
  return (
    <div className='Cart'>
      
                <div className='total'>total: <span>${x.toFixed(2)}</span></div>
                {Num.length >0 ? Num.map((e:CartType)=>(
                      <div className='container' key={e.Product.id}>
                      <div className="left">
                          <img src={e.Product.image} alt={e.Product.title} height={350}/>
                      </div>
                          <div className='right'>
                                  <div className="">
                              <h2>{e.Product.category}</h2>
                              <h3>{e.Product.title.substring(0,16)}</h3>
                              <p className='number'>${e.Product.price}</p>
                            </div>
                            <div className="">
                              <h2>Quantity</h2>
                              <span className='number'>{e.qty}</span>
                            </div>
                            <div className='btns'>
                              <button onClick={()=>dispatch(AddItem(e.Product.id))}><i className="fa-solid fa-plus"></i> Add one</button>
                              <button onClick={()=>dispatch(DeleteItem(e.Product.id))}><i className="fa-solid fa-trash"></i> remove one</button>
                              <button onClick={()=>dispatch(DeleteAllItem(e.Product.id))}>[<i className="fa-solid fa-trash"></i>] remove all</button>
                            </div>
                          </div>
                    
                    </div>
                  )) :<div className='No-Product'>Sorry no product Yeat <br /> go ahead and buy some things
                  </div>}
    </div>
  )
}

export default Cart