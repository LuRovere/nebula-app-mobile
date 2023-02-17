import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../../configs";

const getCategories = createAsyncThunk(
    "getCategories",
    async()=>{
        try{

            let categories =await axios.get(`${API_URL}categories`)

            return{
                success: true,
                response: {cateogories:categories.data.response}
            }
           
        }catch(error){
            return{
                success:false,
                response:{error:error.message}
            }
        }
    }
)

const categoryActions = {getCategories}



export default categoryActions

