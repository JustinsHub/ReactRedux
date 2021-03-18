import axios from "axios";
import { LOAD_PERSON } from "./types";

//our person redux-thunk
function getPersonFromAPI(id) {
  return async function (dispatch) {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);

    //destructuring and setting birth_year to have different name value.
    //grabbing these values from the API.
    let {
      name,
      gender,
      birth_year: birthYear,
      homeworld,
      films
    } = res.data;

     //mappings through the API values making sure it matches the correct character digits?
    films = films.map(url => url.match(/\d+/)[0]);
    homeworld = homeworld.match(/\d+/)[0];

    //getting values and adding that into our person action creator payload.
    const person = { id, name, gender, birthYear, homeworld, films };
    dispatch(gotPerson(person));
  };
}

//our film action creator passed inside our thunk to dispatch the certain action.
//payload takes in ...object passed in and that gets rendered
function gotPerson(person) {
  return { type: LOAD_PERSON, payload: person };
}


export { getPersonFromAPI }