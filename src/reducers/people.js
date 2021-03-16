import { LOAD_PERSON, RESET_ALL } from "../actions/types";

//default state is an empty object
const INITIAL_STATE = {};


function people(state = INITIAL_STATE, action) {
  switch (action.type) {
    //Resets all people into the rest of the initial state.

    case RESET_ALL:
      return { ...INITIAL_STATE };

    //Gets the rest of people and add on a [key]:value pair; action.payload.id as key and 
    //rest of action.payload as the object value.
    case LOAD_PERSON:
      return {
        ...state,
        [action.payload.id]: { ...action.payload }
      };

    default:
      return state;
  }
}

export default people;