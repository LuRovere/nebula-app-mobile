import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const getGame= createAsyncThunk("getGame", async (id) => {
    try {

        let response = await axios?.get(`https://nebula-dzl2.onrender.com/api/games/${id}` )

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

