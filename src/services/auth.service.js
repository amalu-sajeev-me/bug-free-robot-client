import axios from "axios";
const API_URL = "https://bug-free.herokuapp.com/api/members/";
const register = (
  firstName,
  lastName,
  email,
  username,
  dateOfBirth,
  phone,
  password
) => {
  return axios
    .post(
      API_URL + "checkin",
      {
        firstName,
        lastName,
        email,
        username,
        dateOfBirth,
        phone,
        password,
      },
      {
        withCredentials: true,
      }).then((response) => {
      if (response.data.accessToken) {
         localStorage.setItem("user", JSON.stringify(response.data));
      }
      console.log(response.data);
      return response.data;
    });
};
const login = (username, password) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
         localStorage.setItem("user", JSON.stringify(response.data));
      }
      console.log(response.data);
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
export default {
  register,
  login,
  logout,
  getCurrentUser,
};
