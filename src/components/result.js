import React from 'react';

class Result extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      lat: '',
      long: '',
    }
  }
  
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


export default Result;