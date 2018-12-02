import React from 'react'
import { Link } from 'react-router-dom';
import { shareThisPost } from '../../util/shareThis';



export default function SocialMedia(props) {
    const { post } = props;
    return (
        <div >
            <div className="posts__side__meta">
                <span className="text__date">{post.date}</span>
                {post.category && (
                    <Link to={`/${post.category}`}>
                        <span className="text__category--black ">{post.category.replace(/-/g, ' ')}</span>
                    </Link>
                )}
            </div>
            <div className="posts__social__widget">
                <div className="posts__social__toggle">
                    <i onClick={shareThisPost} id={post.seoUrl} className="icon-arrow-up--button"></i>
                </div>
                <div className="posts__social__label">
                    <i onClick={shareThisPost} id={post.seoUrl} className="icon-facebook"> </i>
                    <i onClick={shareThisPost} id={post.seoUrl} className="icon-twitter"> </i>
                    <i onClick={shareThisPost} id={post.seoUrl} className="icon-pinterest2"> </i>
                </div>
            </div>
        </div>
    )
}
