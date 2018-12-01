import React, { Component } from 'react'
import { ENDPOINTS } from "../services/apiCalls";
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import { dateFormat } from '../util/dateFormat';


export default class SearchResults extends Component {
    constructor(props) {
        super(props)
        this.state = { posts: [] }
    }

    componentWillMount() {
        const path = this.props.location.pathname.split('/');
        ENDPOINTS.getCategories(path[path.length - 1]).then(posts => {
            console.log(posts);
            this.setState({ posts })
        })
    }

    render() {
        const { posts } = this.state;
        console.log("POST", posts.category);

        return (
            <div className="container--flex posts">
                <div className="col-7" >

                    {posts.category && posts.category.map((post, i) => (
                        <div className="Card" key={i}>

                            <div className="col-7 ">

                                <img src={post.image} alt={post.title} />
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
