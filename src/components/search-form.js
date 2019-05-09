import React from 'react';
import superagent from 'superagent';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      words: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    let data = await superagent.get('heroku backend')
  }

  render () {
    return (
      <form>
        <input type="text" id="back-end-url"></input>
        <button>Submit</button>
      </form>
    );
  }
}

export default SearchForm;