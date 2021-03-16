import { combineReducers } from "redux";
import films from "./films";
import planets from "./planets";
import people from "./people";


//collecting all redux reducers into one
export default combineReducers({
  films,
  planets,
  people,
});