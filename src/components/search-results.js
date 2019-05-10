import React from 'react';
import Darksky from './callcomponets/darksky.js';
// import Yelp from './callcomponents/yelp.js'
import Eventbrite from './callcomponets/eventbrite';
import MovieDb from './callcomponets/tmdb';

const SearchResult = (props) => {
  return (
    <React.Fragment>
      <Darksky location={props.location} herokuServer={props.herokuServer}/>
      {/* <Yelp location={props.location} herokuServer={props.herokuServer}/> */}
      <Eventbrite location={props.location}  herokuServer={props.herokuServer}/>
      {/* <MovieDb location={props.location} herokuServer={props.herokuServer}/> */}
    </React.Fragment>
  );
}

export default SearchResult;