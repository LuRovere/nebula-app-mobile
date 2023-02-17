import { createAction } from "@reduxjs/toolkit"

const filterCategoryGames = createAction(
  'filterCategoryGames',
  (data) => {
    console.log(data)
    return {
      payload: data
    }
    
  }
) 

const filterCategoryGamesActions = { filterCategoryGames }
export default filterCategoryGamesActions