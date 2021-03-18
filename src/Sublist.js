import React from 'react';
import { Link } from "react-router-dom";

//re-useable generic component.
//takes a title and items props passed down.
//maps through the items prop to render.
function Sublist({title, items}) {
  return (
    <>
      <h3>{ title }</h3>
      <ul>
        {items.map(item =>
          <li key={item.id}><Link to={item.url}>{item.display}</Link></li>
        )}
      </ul>
    </>
  );
}

export default Sublist;