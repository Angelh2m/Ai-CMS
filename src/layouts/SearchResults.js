import React, { Component } from 'react'
import { ENDPOINTS } from "../services/apiCalls";
import Sidebar from '../components/Sidebar/Sidebar';
import { Link } from 'react-router-dom';




export default class SearchResults extends Component {
    constructor(props) {
        super(props)
        this.state = { posts: [] }
    }

    componentWillMount() {
        const path = this.props.location.pathname.split('/');
        ENDPOINTS.getCategories(path[path.length - 1]).then(posts => {

            if (posts.category.length > 0 || posts.tags.length > 0) {
                return this.setState({ posts })
            }

            this.setState({ message: path })


        })
    }

    render() {
        const { posts } = this.state;

        return (
            <div className="container--flex posts">
                <div className="col-7" >
                    {this.state.message && (
                        <div>
                            <span>We have not found any posts for : </span>
                            <h1>{this.state.message}</h1>
                        </div>
                    )}
                    {posts.category && posts.category.map((post, i) => (
                        <div className="Card" key={i}>

                            <div className="col-7 ">
                                <Link to={`${post.category}/${post.seoUrl}`}>
                                    <img src={post.image} alt={post.title} />
                                </Link>
                                <div className="col-9">
                                    <div className="posts__content">
                                        <h2>{post.title}</h2>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <aside className="col-2-half">
                    <Sidebar />
                </aside>
            </div>
        )
    }
}
