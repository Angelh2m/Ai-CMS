import React, { Component } from 'react'
import { ENDPOINTS } from "../services/apiCalls";
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import { dateFormat } from '../util/dateFormat';
import SocialMedia from '../components/SocialMedia/SocialMedia';


export default class Homepage extends Component {

    constructor(props) {
        super(props)
        this.state = { posts: [] }
        this.getAllPosts = this.getAllPosts.bind(this)
    }

    componentWillMount() {
        this.getAllPosts().then(posts => {
            posts.map(el => {
                el.date = dateFormat(el.date)
                // el.category = el.category.replace(/-/g, ' ')
            })
            this.setState({ posts })
        })
    }

    async getAllPosts() {
        const result = await ENDPOINTS.getPosts(3);
        return result
    }



    render() {
        const { posts } = this.state;
        console.log(posts);

        return (
            <div className="container--flex posts">
                <div className="col-7">
                    {posts.map((post, i) => (
                        <section key={i}>
                            <div className="container--flex">
                                <div className="col-1 posts__social-column">
                                    <SocialMedia post={post} />
                                </div>
                                <div className="col-7 ">
                                    <Link to={`${post.category}/${post.seoUrl}`}>
                                        <img src={post.image} alt={post.title} />
                                    </Link>
                                    <div className="col-9">
                                        <div className="posts__content">
                                            <h2>{post.title}</h2>
                                            <p dangerouslySetInnerHTML={{ __html: post.body.replace(/<[^>]*>/g, '').split('').splice(0, 200).join('') }} ></p>
                                            <Link to={`${post.category}/${post.seoUrl}`}>
                                                <span className="button--pink" >READ MORE</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {console.log(post.body.split('').splice(0, 10).join(''))}

                            </div>

                        </section>

                    ))}
                </div>

                <aside className="col-2-half">
                    <Sidebar />
                </aside>
            </div>

        )
    }
}
