import { API_ENDPOINT } from '../config/config';
import { handleStorage } from '../util/localStorage'

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
    return fetch(`${API_ENDPOINT}/api/posts/post/${post}`)
        .then(response => {
            return response.json()
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

const makePost = (token, payload) => {

    return fetch(`${API_ENDPOINT}/api/posts`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
    })
        .then((response) => { handleStorage.deleteLocalStorage('bucket'); return response })
        .catch(error => console.log(error));
}

const updatePost = (token, payload, post) => {


    return fetch(`${API_ENDPOINT}/api/posts/post/${post}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
    })
        .then((response) => { handleStorage.deleteLocalStorage('bucket'); return response })
        .catch(error => console.log(error));
}

const login = (user) => {

    return fetch(`${API_ENDPOINT}/api/login`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then((response) => response.json())
        .then((token) => token)
        .catch(error => console.log(error));
}


const makeComment = (commentPayload) => {

    return fetch(`${API_ENDPOINT}/comments/user`, {
        method: 'POST',
        body: JSON.stringify(commentPayload),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then((response) => response.json())
        .then((response) => response)
        .catch(error => console.log(error));
}

export const ENDPOINTS = {
    getSinglePost,
    getPosts,
    getCategories,
    makePost,
    updatePost,
    login,
    makeComment
}

