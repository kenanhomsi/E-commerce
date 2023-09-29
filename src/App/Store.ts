import {configureStore} from '@reduxjs/toolkit'
import CartReducers from '../reduxToolkit/Cart/cartSilce'



const Store=configureStore({
    reducer:{
        Cart:CartReducers,
    },
})

export default Store
export type RootState=ReturnType<typeof Store.getState>
export type AppDispatch=typeof Store.dispatch