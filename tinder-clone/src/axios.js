import axios from "axios";

const instance = axios.create({
    // localhost
    // baseURL: "http://localhost:3000",
    // host on heroku
    baseURL: "https://tinderdoge.herokuapp.com/",
  });

  export default instance;