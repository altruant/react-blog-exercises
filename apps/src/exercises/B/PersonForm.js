import React, { Component } from 'react';

class PersonForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      pronouns: '',
      address: '',
      phone: '',
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return(
      <form className='col'>
        <div className='row pl-3 pb-2'>
          <input type='text' className='form-control col-12 col-md-2 mr-2 mb-2' name='firstName' value={this.state.firstName} onChange={this.handleInput} placeholder='First Name' />
          <input type='text' className='form-control col-12 col-md-2 mr-2 mb-2' name='lastName' value={this.state.lastName} onChange={this.handleInput} placeholder='Last Name' />
          <select className='form-control col-12 col-md-2 mr-2 mb-2' name='pronouns' value={this.state.pronouns} onChange={this.handleInput} placeholder='Pronouns' />
          <input type='text' className='form-control col-12 col-md-2 mr-2 mb-2' name='phone' value={this.state.phone} onChange={this.handleInput} placeholder='Phone' />
        </div>
        <div className='row pl-3'>
          <textarea type='text' className='form-control col-md-8 mb-2' name='address' value={this.state.address} onChange={this.handleInput} placeholder='Address' />
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>

    )
  }
}

export default PersonForm
