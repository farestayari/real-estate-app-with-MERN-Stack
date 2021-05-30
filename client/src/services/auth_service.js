import axios from "axios";

const API_URL = "http://localhost:5000/api/user/";

const register = (name, email, password,password_confirmation , role) => {
  return axios.post(API_URL + "signup", {
    name,
    email,
    password,
    password_confirmation,
    role
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};