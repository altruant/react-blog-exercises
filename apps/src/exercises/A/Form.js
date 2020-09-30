import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state= {
      title: '',
      content: '',
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({[event.target.name]: event.target.value})
  }
  render() {
    return (
      <form className='col-12'>
      <input type='text' className='form-control mb-2' name='title' value={this.state.title} onChange={this.handleInput} placeholder='Title' />
      <textarea type='text' className='form-control mb-2' name='content' value={this.state.content} onChange={this.handleInput} placeholder='Blog Post' />
      <button type='submit' className='btn btn-primary'>Submit</button>
    </form>
    )
  }
}

export default Form;
