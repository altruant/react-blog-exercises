  import React, { Component } from 'react';
import PersonForm from './PersonForm';

class B extends Component {
  render() {
    return (
      <div className='form-container'>
        <h1 className='mb-3 pl-3 pt-3'>Exercise B</h1>
        <PersonForm />
      </div>
    )
  }
}

export default B;
