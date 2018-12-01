import { API_ENDPOINT } from '../config/config';


const getPosts = (num, category) => {

    let cat = category ? category : ' ';

    return fetch(`${API_ENDPOINT}/api/${cat}/${num}`)
        .then(res => {
            return res.json()
        })
        .then(posts => {
            return posts
        })
        .catch(err => console.log(err))
};

const getSinglePost = (post) => {

    return fetch(`${API_ENDPOINT}/api/posts/post/${post.replace('/', '')}`)
        .then(res => {
            return res.json()
        })
        .then(posts => {
            return posts
        })
        .catch(err => console.log(err))
};


const getCategories = (category) => {
    return fetch(`${API_ENDPOINT}/search/${category}`)
        .then(res => {
            return res.json()
        })
        .then(posts => {
            return posts
        })
        .catch(err => console.log(err))
}

export const ENDPOINTS = {
    getSinglePost,
    getPosts,
    getCategories
}
