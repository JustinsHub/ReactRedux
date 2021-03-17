import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { resetAll } from "./actions/reset";


function HomePage() {
  //undefined when opened with nothing on initial state. Gets films index of 1. 
  const loaded = useSelector(st => st.films[1] !== undefined);
  const dispatch = useDispatch();

  function reset() {
    //returns it to initial_state = {}
    dispatch(resetAll());
  }
  
  return (
    <>
      {loaded ? (
        <button
          className="btn btn-danger btn-block btn-lg"
          onClick={reset}
        >
          Reset To Fresh Exploration
        </button>
      ) : (

        //default to films/1 which has already been requested when the page starts.
        <Link to="/films/1" className="btn btn-primary btn-block btn-lg">
          Start with &ldquo;A New Hope&rdquo;
        </Link>
      )}

      {/* Star Wars Title image */}
      <img
        className="mt-3 mb-5 w-100"
        alt="StarWars.ly"
        src="https://vignette.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg"
      />
    </>
  );
}

export default HomePage;
