import React from 'react';
import superagent from 'superagent';

class Form extends React.Component {
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

  
}