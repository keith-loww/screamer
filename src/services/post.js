import axios from "axios"
const baseUrl = "https://screamer-be.herokuapp.com/api/posts"

const getAll = async () => {
    const resp = await axios.get(baseUrl)
    return resp.data
}

const createPost = async newObject => {
    console.log(newObject)
    const response = await axios.post(baseUrl, newObject)
    return response.data
}

export default { getAll, createPost }