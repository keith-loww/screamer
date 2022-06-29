import axios from "axios"
const baseUrl = "/api/posts"

const getAll = async () => {
    const resp = await axios.get(baseUrl)
    return resp.data
}

const createPost = async newObject => {
    const response = await axios.post(baseUrl, newObject)
    return response.data
}

export default { getAll, createPost }