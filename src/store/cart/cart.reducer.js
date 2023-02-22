import {  createReducer } from "@reduxjs/toolkit"
import cartActions from './cart.actions';




const { addCart, readCart, deleteCart }=  cartActions
const initialState = {
    cart: [],
}

const cartReducer = createReducer(
    initialState,
    (builder) => { builder
        .addCase(addCart.fulfilled, (state,action) =>{
                let newState = {
                    cart: action.payload
                }
                return newState
            }
        )
        .addCase(addCart.rejected , (state, action)=>{
            let newState= {
                message: "Error Loading cart"
            }
            return newState
        })
        .addCase (readCart.fulfilled, (state, action) =>{
            let newState = {
                cart: action.payload
            }
            return newState
        })
        
    }
)
const deleteReducer = createReducer(
    initialState,
    (builder) => { builder
        .addCase (deleteCart.fulfilled, (state, action) =>{
            let newState = {
                cart: action.payload
            }
            return newState
        })
    }
)

const cartReducers = { cartReducer, deleteReducer}
export default cartReducers


