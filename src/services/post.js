import axios from "axios"
const baseUrl = "https://screamer-be.onrender.com//api/posts"

const getAll = async () => {
    const resp = await axios.get(baseUrl)
    return resp.data
}

const createPost = async newObject => {
    const response = await axios.post(baseUrl, newObject)
    return response.data
}

const updatePost = async newObject => {
    const resp = await axios.put(`${baseUrl}/${newObject.id}`, newObject)
    return resp.data
}

export default { getAll, createPost, updatePost }