import axios from 'axios';
import { LOAD_FILM } from "./types";

//Our film redux-thunk. 
function getFilmFromAPI(id) {
  return async function (dispatch) {
    const res = await axios.get(`https://swapi.dev/api/films/${id}/`);

    //destructuring and setting title and opening_crawl to have different name values.
    //grabbing these values from the API.
    let {
      title: name,
      director,
      opening_crawl: openingCrawl,
      characters,
      planets
    } = res.data;

    //mappings through the API values making sure it matches the correct character digits?
    characters = characters.map(url => url.match(/\d+/)[0]);
    planets = planets.map(url => url.match(/\d+/)[0]);

    //getting values and adding that into our film action creator payload.
    const film = { id, name, director, openingCrawl, characters, planets };
    dispatch(gotFilm(film));
  };
}

//our film action creator passed inside our thunk to dispatch the certain action.
//payload takes in ...object passed in and that gets rendered
function gotFilm(film) {
  return { type: LOAD_FILM, payload: film };
}


export { getFilmFromAPI }