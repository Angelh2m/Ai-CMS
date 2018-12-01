import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import { getPosts } from '../services/apiCalls';
import Annah from "../images/static/Annah.jpg";


class IndexPage extends Component {

  constructor(props) {
    super(props)
    this.state = { posts: [] }
    this.getAllPosts = this.getAllPosts.bind(this)

  }

  componentWillMount() {
    this.getAllPosts().then(posts => {
      // console.log(posts);
      this.setState({ posts })
    })
  }

  async getAllPosts() {
    const result = await getPosts(3);
    return result
  }


  render() {
    const { posts } = this.state;
    console.log(posts);

    return (

      <Layout >
        <div className="container--flex">
          <div className="col-6">
            <h3>pots</h3>
            <Link to="/app/profile" replace>Link</Link>
            {
              posts.map((post, i) => (
                <section key={i}>

                  <h2 >{post.title}</h2>
                  <img src={post.image} alt={post.image} />
                </section>
              ))
            }
          </div>
          <div className="col-4-pad-l">
            <h4>Sidebar</h4>
            <img src={Annah} alt="" />
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
