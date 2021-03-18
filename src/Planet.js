import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getPlanetFromAPI } from "./actions/planets";
import Sublist from "./Sublist";


function Planet() {
  const {id} = useParams();
  const planet = useSelector(st => st.planets[id]);
  const filmState = useSelector(st => st.films);
  const characterState = useSelector(st => st.people);
  const dispatch = useDispatch();
  const missing = !planet;


  //initial API planet request when page is loaded based on params id. 
  //if there has been no request/id found yet, make one.
  //all id's are provided by the API.
  useEffect(function() {
    if (missing) {
      dispatch(getPlanetFromAPI(id));
    }
  }, [missing, id, dispatch]);

  if (missing) return "loading...";

  //all the planet/films/residents each have a relational value pair to access.
  //access with films that relates to that planet based on it's relation.
  const films = planet.films.map(fid => ({
    id: fid,
    url: `/films/${fid}`,
    display: filmState[fid] ? filmState[fid].name : "Unknown"
  }));

  //access with residents that relates to that planet based on it's relation.
  const residents = planet.residents.map(pid => ({
    id: pid,
    url: `/people/${pid}`,
    display: characterState[pid] ? characterState[pid].name : "Unknown"
  }));

  return (
    <div>
      <h1 className="mt-3 mb-3">
        {planet.name}
        <small className="text-muted float-right">{id}</small>
      </h1>

      <p><b>Climate: </b>{planet.climate}</p>
      <p><b>Population: </b>{planet.population}</p>

      <Sublist title="People" items={residents} />
      <Sublist title="Films" items={films} />
    </div>
  );
}

export default Planet;
