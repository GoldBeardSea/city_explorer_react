import React from 'react';
import superagent from 'superagent';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      queryString: '',
    };
  }

  handlequeryString = e => {
    let queryString = e.target.value;
    this.setState({ queryString });
  };

  handleSubmit = async e => {
    e.preventDefault();
    let data = await superagent.get(`${this.props.herokuServer}/location?data=${this.state.queryString}`);
    let locationCoord = data.body;
    this.props.updateLocationCoord(locationCoord);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handlequeryString} />
        <button>Explore!</button>
      </form>
    );
  }
}

export default SearchForm;