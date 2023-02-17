import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const getGame= createAsyncThunk("getGame", async (id) => {
    try {
        let response = await axios?.get(`http://localhost:8000/api/games/${id}` )
        return {
            response: {game: response.data}, 
            message: 'Game found'
        }
    }
    catch (error){
        return {
            response: {game : error.response.data},
            message: "error obtained game"
        }
    }
} )

const gamesActions = {getGame}
export default gamesActions
