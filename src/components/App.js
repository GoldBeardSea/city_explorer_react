import React from 'react';
import Header from 'header.js';
import Map from 'map.js';
import SearchForm from 'search-form.js';
import SearchResults from 'result.js';

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

handleSubmit = e => {
  e.preventDefault();
  let location = this.state.location
  this.setState({location})
}

  render() {
    return (
      <React.Fragment>
        <Header />
        <SearchForm />
        <Map />
        <SearchResults />
      </React.Fragment>
    );
  }
}

export default App;
