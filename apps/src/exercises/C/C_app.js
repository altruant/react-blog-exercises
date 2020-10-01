import React, { Component } from 'react';
import BlogList from './BlogList';
import BlogItem from './BlogItem';

class C extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: null,
      blogPosts: [],
    }
    this.displayBlog = this.displayBlog.bind(this)
  }

  displayBlog(index) {
    // const displayIndex = this.state.display;
    this.setState({display: index})
  }

  componentDidMount() {
    const blogPosts = [{
      title: 'Lorem Ipsum 1',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, officiis. Harum laudantium neque delectus a, id dolorum quia dignissimos facere maxime ratione? Temporibus placeat aperiam, dolor soluta explicabo nesciunt provident error architecto quae odit quaerat pariatur ab facere illum id laboriosam fuga, quod quo corporis. Nesciunt quod quas nostrum maiores repellendus soluta architecto incidunt numquam beatae illum at tenetur tempore omnis cumque corporis quasi dicta culpa dolore dolorum et, autem neque consequatur nam iusto. Non autem nesciunt facilis placeat dolorum cumque id repudiandae, illum tempore perspiciatis? Rem ipsa eius laborum est blanditiis, at, consectetur temporibus porro tempora commodi soluta! Quis?'
    },
    {
      title: 'Lorem Ipsum 2',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse recusandae ab laboriosam vitae quibusdam culpa atque amet quod, mollitia saepe, adipisci quia, enim aperiam. Sequi, veritatis. Incidunt voluptas deserunt corporis placeat, hic molestiae possimus porro, suscipit vitae consequatur. Ad excepturi consectetur aut suscipit ex ullam perferendis at numquam quae, delectus beatae commodi aperiam impedit molestiae velit alias reiciendis minima nobis sed error iste hic labore. Consectetur dolorum, ipsam doloribus voluptates dicta, autem, aspernatur ullam temporibus recusandae vel voluptatum qui harum ut omnis? Fuga aliquam molestiae autem vero quia sequi nobis, alias, dicta veniam dolor esse temporibus mollitia aperiam pariatur assumenda!'
    },
    {
      title:'Lorem Ipsum 3',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus omnis quos non atque voluptatum suscipit repudiandae, voluptas doloremque illum perferendis ab incidunt obcaecati, sit tempore, provident dolore magnam vero quia facilis aliquid quaerat quisquam odit tempora laudantium. Repudiandae adipisci provident dicta inventore reprehenderit nobis pariatur vel doloribus quibusdam debitis. Assumenda debitis illum natus vel maiores odit ea neque, repudiandae alias dolor accusantium ullam similique ratione quisquam delectus repellendus temporibus omnis expedita magnam quas aperiam, sequi reiciendis fuga iusto velit! Laborum temporibus accusantium, reiciendis numquam suscipit nihil in alias nam explicabo, beatae cum? Repudiandae incidunt commodi labore molestiae, facere quam voluptate.'
    }];
    this.setState({blogPosts})
  }
  render() {


    return(
      <div className='blog-container' style={{marginLeft: '6vw'}}>
        <h1 className='mb-3 pt-3'>Exercise C</h1>
        <div className="flex-container d-flex">
        <BlogList displayBlog={this.displayBlog} blogPosts={this.state.blogPosts} />
        {this.state.blogPosts[this.state.display]
          ? <BlogItem blog={this.state.blogPosts[this.state.display]}/>
          : null
        }
      </div>

      </div>
    )
  }
}

export default C;
