import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "https://bug-free.herokuapp.com/api/members/";
const getPublicContent = () => {
  return axios.get(API_URL + "all");
};
const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};
const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};
export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
};