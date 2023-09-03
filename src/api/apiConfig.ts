import axios from "axios";
import { API_URL, BASE_URL } from "../constants/api";

export const liaApi = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
  },
});
