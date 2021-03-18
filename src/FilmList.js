import React from 'react';
import { useSelector } from 'react-redux';

import ItemList from './ItemList'

function FilmList() {
  //selecting just the values and map through it. 
  //Inside the map function we have the rest of films and getting the key value pair: url film.
  const items = useSelector(st => Object.values(st.films).map(
    f => ({...f, url: `/films/${f.id}`})
  ));
  return <ItemList title="Films" items={items} />;
}

export default FilmList;
