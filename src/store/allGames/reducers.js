import allGamesActions from "./actions"
import { createReducer } from "@reduxjs/toolkit"

const { getAllGames, getAllGamesByFilter }=  allGamesActions
const initialState = {
    allgames: [],
    inputText: "",
    category: [] ,
}

const allgamesreducers = createReducer(
    initialState,
    (builder) => { builder
        .addCase(
            getAllGames.fulfilled,
            (state,action) =>{
                let newState = {
                    allgames: action.payload.response.allgames,
                    text: action.payload.response.text,
                    category: action.payload.response.category,
                }
                return newState
            }
        )
        .addCase(
            getAllGamesByFilter.fulfilled,
            (state,action) =>{
                let newState = {
                    allgames: action.payload.response.allgames,
                    category: action.payload.response.category,
                    text: action.payload.response.text
                }
                return newState
            }
        )
    }
)

export default allgamesreducers