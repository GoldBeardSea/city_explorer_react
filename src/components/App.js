import React from 'react';
import Header from 'header.js';
import Map from 'map.js';

class App extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      
    };
  }


handleForm = (results) => {
  this.setState({ results });
}

  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Map />
        <SearchResults />
      </React.Fragment>
    );
  }
}

export default App;
