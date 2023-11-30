import axios from "axios";

// const axiosInstance = axios.create({
//     baseURL:"http://localhost:5000/"
// })
const axiosInstance = axios.create({
    baseURL:"https://us-central1-global-traders-usa-84059.cloudfunctions.net/app/"
})

export default axiosInstance