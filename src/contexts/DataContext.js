import { createContext, useContext, useReducer } from "react";

import { cuisineData, restaurantsData } from "../constants/Data";
const DataContext = createContext({ state: {}, dispatch: () => {} });

//Reducer function and initial state
const initial_state = {
  cuisines: cuisineData,
  restaurants: restaurantsData,
  selectedCuisineId: 0,
};
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_SELECTED_CUISINE":
      return { ...state, selectedCuisineId: payload };
    default:
      return state;
  }
};

//Provider
const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial_state);
  /////////
  const filteredRestaurants = state?.restaurants?.filter(
    ({ id }) => id === state?.selectedCuisineId
  );

  return (
    <DataContext.Provider value={{ state, dispatch, filteredRestaurants }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
export default DataProvider;
