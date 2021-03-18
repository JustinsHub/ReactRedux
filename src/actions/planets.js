import axios from "axios";
import { LOAD_PLANET } from "./types";

//planet redux thunk
function getPlanetFromAPI(id) {
  return async function (dispatch) {
    const res = await axios.get(`https://swapi.dev/api/planets/${id}/`);

    //destructuring and setting to be the same value.
    //grabbing planet values values from the API.
    let {
      name,
      population,
      climate,
      residents,
      films
    } = res.data;

    residents = residents.map(url => url.match(/\d+/)[0]);
    films = films.map(url => url.match(/\d+/)[0]);

    //getting values and adding that into our planet action creator payload.
    const planet = { id, name, population, climate, residents, films };
    dispatch(gotPlanet(planet));
  };
}

//our film action creator passed inside our thunk to dispatch the certain action.
//payload takes in ...object passed in and that gets rendered
function gotPlanet(planet) {
  return { type: LOAD_PLANET, payload: planet };
}


export { getPlanetFromAPI }