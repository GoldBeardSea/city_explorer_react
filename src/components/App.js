import React from 'react';
import Header from './header';
import Map from './map';
import SearchForm from './search-form';
import SearchResults from './search-results';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      herokuServer: 'https://blooming-hollows-11631.herokuapp.com'
    };
  }

  updateLocationCoord = (location) => {
    console.log(location)
    this.setState({location});
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <SearchForm updateLocationCoord={this.updateLocationCoord} herokuServer={this.state.herokuServer} />
        <Map location={this.state.location}/>
        <SearchResults location={this.state.location} herokuServer={this.state.herokuServer}/>
      </React.Fragment>
    );
  }
}

export default App;
