import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getCategories = createAsyncThunk(
    "getCategories",
    async()=>{
        try{
            let categories =await axios.get('http://localhost:8000/api/categories')
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
/* import { createAction } from "@reduxjs/toolkit"

const filterCategories = createAction(
  'filterCategories',
  (data) => {
    console.log(data)
    return {
      payload: data
    }
    
  }
) 

const filterCategoriesActions = { filterCategories }
export default filterCategoriesActions */