import axios from "axios"
const BASE_URL = "http://localhost:4000/api/v1/flightlabs/all-data"

export const instance = axios.create({
    baseURL: BASE_URL

})