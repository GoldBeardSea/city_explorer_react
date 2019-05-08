import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>City Explorer</h1>
      <p>Enter a location below to learn about the weather, events, restaurants, movies, and more!</p>
    </header>
  );
};

const Main = () => {
  return (

  )

}

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    }
  };

  render() {
    return (
      <div>
        <h3>{this.state.counter}</h3>
        <button onClick={this.decrement}> Decrement </button>
        <button onClick={this.increment} > Increment </button>
        <button onClick={this.pow} > Pow </button>
        <button onClick={this.sqrt} > sqrt  </button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
  return (
    <React.Fragment>
      <App>
  <Header>
  <Main>
    <Search>
    <Map>
    <Result>
    </React.Fragment>
    );
  }
}

export default App;
