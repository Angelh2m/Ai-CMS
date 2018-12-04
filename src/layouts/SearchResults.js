import React, { Component } from 'react'
import { ENDPOINTS } from "../services/apiCalls";
import Sidebar from '../components/Sidebar/Sidebar';
import { Link } from 'react-router-dom';

import './SearchResults.scss';

export default class SearchResults extends Component {

    _isMounted = false;

    constructor(props) {
        super(props)
        this.state = { posts: [], message: '' }
        this.handleRouteChange = this.handleRouteChange.bind(this)
        console.log('SEARCHLOADED ');

    }

    componentDidMount() {
        this.handleRouteChange()
    }

    componentDidUpdate(e) {
        console.log(e);

    }


    handleRouteChange() {
        const path = this.props.location.pathname.split('/');

        ENDPOINTS.getCategories(path[path.length - 1]).then(posts => {

            if (posts.category.length > 0 || posts.tags.length > 0) {
                this._isMounted = true
                return this.setState({ posts })
            }
            // this.setState({ message: path })
        })


    }

    render() {
        const { posts } = this.state;
        console.log(posts);

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
                        <div className="layout__search" key={i}>

                            <div className="" >
                                <Link to={`${post.category}/${post.seoUrl}`}>
                                    <img src={post.image} alt={post.title} />
                                </Link>
                            </div>
                            <div className="layout__one">
                                {post.category && (
                                    <Link to={`${post.category}/${post.seoUrl}`}>
                                        <span className="text__category"> {post.category} </span>
                                    </Link>
                                )}
                                <h2>{post.title}</h2>
                                <p dangerouslySetInnerHTML={{ __html: post.body.replace(/<[^>]*>/g, '').split('').splice(0, 100).join('') }} ></p>

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
