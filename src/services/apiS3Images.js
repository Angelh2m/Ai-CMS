// http://localhost:4000/uploads/post-one
import { API_ENDPOINT } from '../config/config';


const getListFromS3 = (bucket) => {
    return fetch(`${API_ENDPOINT}/uploads/${bucket}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((value) => {
            return value.data.Contents.map(el => el.Key)
        })
        .catch(error => console.log(error));
}

const deleteListFromS3 = (bucket, file) => {

    var data = new FormData()
    data.append('fileToDelete', file);

    console.log(bucket, file);

    return fetch(`${API_ENDPOINT}/uploads/${bucket}/${file}`, {
        method: 'DELETE',
        body: JSON.stringify(bucket),
        headers: {
            'Accept': 'application/json',
        },
    })
        .then((res) => res.json())
        .then((value) => {
            return value
        })
        .catch(error => console.log(error));
}


const addToListS3 = (bucket, image) => {
    const imageFile = new FormData()
    imageFile.append('image', image);

    return fetch(`http://localhost:4000/uploads/${bucket}`, {
        method: 'POST',
        body: imageFile,
        headers: {
            'Accept': 'application/json',
        }
    })
        .then((res) => res.json())
        .then((data) => data)
        .catch(err => err)
}

export const imageHandler = {
    getListFromS3,
    addToListS3,
    deleteListFromS3
}