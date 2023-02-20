import allgamesreducers from "./allgames/reducer";
import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./games/reducer";

export const store = configureStore({
    reducer: {
        allgames: allgamesreducers,
        games: gamesReducer,
    }
})



