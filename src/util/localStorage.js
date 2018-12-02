

const setLocalStorage = () => {
    const butcketId = localStorage.getItem('bucket');
    if (butcketId) { return butcketId }
    localStorage.setItem('bucket', Date.now())

};

const getLocalStorage = (element) => {
    const getKey = element ? localStorage.getItem(element) : ' ';
    return getKey
}

const setToken = (token) => {
    return localStorage.setItem('token', token)
}

const getToken = () => {
    return localStorage.getItem('token')
}

const deleteLocalStorage = (element) => {
    return localStorage.removeItem(element)
}

export const handleStorage = {
    setLocalStorage,
    getLocalStorage,
    deleteLocalStorage,
    setToken,
    getToken
}
