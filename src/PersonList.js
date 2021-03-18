import React from 'react';
import { useSelector } from 'react-redux';

import ItemList from './ItemList'

function PersonList() {
  //selecting just the values and map through it. 
  //Inside the map function we have the rest of person and getting the key value pair: url person.
  const items = useSelector(st => Object.values(st.people).map(
    p => ({...p, url: `/people/${p.id}`})
  ));
  return <ItemList title="People" items={items} />;
}

export default PersonList;