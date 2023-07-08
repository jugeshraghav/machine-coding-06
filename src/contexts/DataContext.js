import { createContext, useContext, useReducer } from "react";

const DataContext = createContext({ state: {}, dispatch: () => {} });

//Reducer function and initial state
const initial_state = {};
const reducer = (state, action) => {};

//Provider
const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial_state);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
export default DataProvider;
