import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:5001/globaltraders-3f62a/us-central1/app/",
});

// using cloud functions with firebase
// const axiosInstance = axios.create({
//   baseURL: "https://us-central1-globaltraders-3f62a.cloudfunctions.net/app/",
// });

// using cyclic .sh app
// const axiosInstance = axios.create({
//     baseURL:"https://easy-erin-bluefish-wear.cyclic.app/"
// })

export default axiosInstance;
