import axios from "axios";

const API_URL = "http://localhost:5000/api/property/";

const getFeaturedProperty = () => {
    return axios.get(API_URL + "getFeatured");
};

// const searchProperty = () => {
//     return axios.get(API_URL + "get-featured");
// }

export default {
    getFeaturedProperty
  };
  
