import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ENDPOINTS } from '../services/apiCalls';
import { dateFormat } from '../util/dateFormat';
import SocialMedia from '../components/SocialMedia/SocialMedia';
import HelmetSEO from '../util/HelmetSEO';
import Comments from '../components/Comments/Comments';

export default class Post extends Component {

    constructor(props) {
        super(props)
        this.state = { post: [] }
        this.getAllPosts = this.getAllPosts.bind(this)
    }

    componentWillMount() {
        const path = this.props.location.pathname.split('/');

        this.getAllPosts(path[path.length - 1]).then(post => {
            const date = dateFormat(post.date)
            post = { ...post, date, }
            this.setState({ post })
        })
    }

    async getAllPosts(location) {
        const result = await ENDPOINTS.getSinglePost(location);
        console.log("rest ", result);
        return result
    }

    render() {
        const { post } = this.state;
        let date = new Date();

        const adminFound = localStorage.getItem('token');

        return (
            <div className="posts" >
                <HelmetSEO
                    title={post.title}
                    description={post.description}
                    image={post.image}
                    seoUrl={post.seoUrl}
                />
                <section>
                    {adminFound && (
                        <div>
                            <Link
                                className="button--salmon--inverted"
                                to={`/write-post/${this.props.location.pathname.split('/')[2]}`} >Edit </Link>

                            <Link
                                className="button--salmon--inverted"
                                to={`/write-post/`} >Write New </Link>
                        </div>
                    )}
                    <div className="container--block ">
                        {/* <div className="col-1 posts__social-column">Social</div> */}
                        <div className="posts__meta">
                            {post.category && (
                                <Link to={`/${post.category}`}  >
                                    <span className="text__category"> {post.category} </span>
                                </Link>
                            )}
                            <span className="text__date">{post.date}</span>
                        </div>
                        <h2 className="text__title">{post.title}</h2>
                        <div className="col-9">
                            <div className="posts__hero-image">
                                <img src={post.image} alt={post.title} />
                            </div>
                            <div className="container--flex ">
                                <div className="col-1 posts__social-column">
                                    <SocialMedia post={post} />
                                </div>
                                <div className="col-9">

                                    <p className="" dangerouslySetInnerHTML={{ __html: post.body }} >
                                    </p>
                                </div>
                            </div>
                            <Comments comments={this.state.post.comment} location={this.props.location.pathname} />
                        </div>
                    </div>
                </section>

            </div>

        )
    }
}
