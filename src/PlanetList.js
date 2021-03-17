import React from 'react';
import {useSelector} from 'react-redux';
import ItemList from './ItemList'

function PlanetList() {
   //selecting just the values and map through it. 
  //Inside the map function we have the rest of planets and adding a new key value pair: url planet
  const items = useSelector(st => Object.values(st.planets).map(
    p => ({...p, url: `/planets/${p.id}`})
  ));
  return <ItemList title="Planets" items={items} />;
}

export default PlanetList;