import React from 'react';
import Darksky from './callcomponets/darksky.js';
import Eventbrite from './callcomponets/eventbrite';

const SearchResult = (props) => {
  return (
    <React.Fragment>
      <Darksky location={props.location} herokuServer={props.herokuServer}/>
      <Eventbrite location={props.location}  herokuServer={props.herokuServer}/>
    </React.Fragment>
  );
}

export default SearchResult;