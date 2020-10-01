import React, { Component } from 'react';

class BlogItem extends Component {
  render() {
    return (
      <div className="card col-8">
        <h2>{this.props.blog.title}</h2>
        <p>{this.props.blog.body}</p>
      </div>
    )
  }
}


export default BlogItem;
