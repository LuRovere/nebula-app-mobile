import { createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../../configs";

const  addCart = createAsyncThunk(
    "addCart",
    async(games, token) => {
        try{
            let url = `${API_URL}shopping-cart/`
            let headers = {headers: {'Authorization': `Bearer ${token}`}}
            const response = await axios.post(url ,games, headers)
            console.log(response);
            return{
                response: response.data
            }
        }catch(error){
            console.log(error)
        } 
    }
)
const deleteCart = createAsyncThunk(
    "deleteCart",
    async(games, token) => {
        try{
            let url = `${API_URL}shopping-cart/`
            let headers = {headers: {'Authorization': `Bearer ${token}`}}
            const response = await axios.delete(url ,games, headers)
            
        }catch(error){
            console.log(error)
        }
    }
)

const cartActions = {
    addCart, deleteCart
}
export default cartActions; 