import axios from "axios";
import { createAsyncThunk  } from "@reduxjs/toolkit";
import { API_URL } from "../../../configs.js";


const  addFav = createAsyncThunk(
    "addFav",
    async( token) => {

        try{
            let url = `${API_URL}favorites`
            let headers = {headers: {'Authorization': `Bearer ${token}`}}
            const response = await axios.post(url, headers)
           // console.log(response);
            return{
                success: true,
                response: response.data.response
            }
        }catch(error){
            console.log(error)
        } 
    }
)
const readFav = createAsyncThunk(
  "readFav",
  async( token ) => {
    try{
      let url = `${API_URL}/favorites`
            let headers = {headers: {'Authorization': `Bearer ${token}`}}
            const response = await axios.get(url, headers)
            //console.log(response)
            return{
              success:true,
              response: response.data.response
            }
    }catch(error){
      console.log(error)
    }
  }
)

const favoritesActions = {addFav, readFav}
export default favoritesActions; 

