import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>City Explorer</h1>
      <p>Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!</p>
    </header>
  );
};

class App extends React.Component {  

  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    );
  }
}

class Main extends React.Component {
  
  render () {
    return (
      <React.Fragment>
        <Search />
        <Map />
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
      </React.Fragment>
    );
  }
}

class Search extends React.Component {
  
  render () {
    return (
      <form>
        <input type="text" id="back-end-url"></input>
        <button>Submit</button>
      </form>
    );
  }
}

class Map extends React.Component {

  render () {
    return (
      <section>
      <img id="map" class="" src="" alt="Placeholder" />
      </section>
    );
  }
}

class Result extends React.Component {
  
  render () {
    return (
      <section>
      <ul>
        <li>API Call</li>
      </ul>
      </section>

    );
  }
}

export default App;
