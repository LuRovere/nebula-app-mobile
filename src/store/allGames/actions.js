import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../../configs.js";

const getAllGamesByFilter = createAsyncThunk(
    "getAllGamesByFilter", 
  async ({inputText ,inputCategory}) => {
  try {
    let allgames = await axios.get(`${API_URL}games?title=${inputText}&category_id=${inputCategory}`)
    return {
      success: true,
      response: {
        allgames: allgames.data.response,
        text: inputText,
        category: inputCategory,
      },
    };
  } catch (error) {
    return {
      success: false,
      response: { error: error.message },
    };
  }
});

const getAllGames = createAsyncThunk(
  "getAllGames", 
  async ({inputText ,inputCategory}) => {
  try {
    let allgames = await axios.get(`${API_URL}/games`);
    return {
      success: true,
      response: {
        allgames: allgames.data.response,
        text: inputText,
        category: inputCategory,
      },
    };
  } catch (error) {
    return {
      success: false,
      response: { error: error.message },
    };
  }
});

const allGamesActions = { getAllGames,  getAllGamesByFilter};

export default allGamesActions;
