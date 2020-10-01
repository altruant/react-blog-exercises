import React, { Component } from 'react';

class BlogList extends Component {

  constructor(props) {
    super(props);

    this.state= '';
  }

  render() {


    const cardStyle = {
      overflow: 'hidden',
      display: '-webkit-box',
      WebkitLineClamp: '8',
      WebkitBoxOrient: 'vertical',

    }
    const buildPosts = this.props.blogPosts.map((posts, index) => (
      <div key={index} className="card col-3 mb-4 mr-2" onClick={() => this.props.displayBlog(index)} style={cardStyle} >
        <h3 className="title pt-4">{posts.title}</h3>
        <p className="body">{posts.body}</p>
      </div>
    ))
    return (

      <div className='blog-card-container'>
        {buildPosts}
      </div>
    )
  }
}

export default BlogList
