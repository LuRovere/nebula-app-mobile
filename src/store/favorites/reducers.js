import {  createReducer } from "@reduxjs/toolkit"
import favoritesActions from './actions';



const { addFav, readFav }=  favoritesActions
const initialState = {
    fav: [],
}

const favoritesReducer = createReducer(
    initialState,
    (builder) => { builder
        .addCase(addFav.fulfilled, (state,action) =>{
                let newState = {
                    fav: action.payload.response.fav
                }
                return newState
            }
        )
        .addCase(addFav.rejected , (state, action)=>{
            let newState= {
                message: "Error Loading fav Reaction"
            }
            return newState
        })
        .addCase (readFav.fulfilled, (state, action) =>{
            //console.log(action)
            let newState = {
                fav: action.payload
            }
            return newState
        })


    }
)

export default favoritesReducer

