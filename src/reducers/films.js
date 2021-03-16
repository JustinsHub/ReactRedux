import { LOAD_FILM, RESET_ALL } from "../actions/types";

//default state is an empty object
const INITIAL_STATE = {};

function films(state = INITIAL_STATE, action) {
  switch (action.type) {
    //Resets all film into the rest of the initial state.

    case RESET_ALL:
      return { ...INITIAL_STATE };

    //Gets the rest of films and add on a [key]:value pair; action.payload.id as key and 
    //rest of action.payload as the object value.
    case LOAD_FILM:
      return {
        ...state,
        [action.payload.id]: { ...action.payload }
      };

    default:
      return state;
  }
}

export default films;