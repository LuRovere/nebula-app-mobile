import { createReducer } from "@reduxjs/toolkit";
import filterCategoryGamesActions from "./action";

const { filterCategoryGames } = filterCategoryGamesActions;

const initialState = {
  filterGame: [],
};

const filterGameReducer = createReducer(initialState, (builder) => {
  builder.addCase(filterCategoryGames, (state, action) => {
  
    console.log(action.payload)
    if (state.filterGame.includes(action.payload)) {
      const newState = {
        filterGame: state.filterGame.filter(
          (id) => id !== action.payload
        ),
      };
      return newState;
    } else {
      state.filterGame.push(action.payload);
    }
  });
});

export default filterGameReducer;
