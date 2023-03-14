import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/eventReducer";
const AppContext = createContext();

const API = "./event.js";
const initialState = {
  isLoading: false,
  isError: false,
  events: [],
  featureEvents: []
 
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //getting all events
  const getEvents = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const events = await res.data;

      dispatch({ type: "MY_API_DATA", payload: events });
    } catch (error) {
      dispatch({ type: "API ERROR" });
    }
  };

  useEffect(() => {
    getEvents(API);
  }, []);

  

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

//custom hook --

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useProductContext };
