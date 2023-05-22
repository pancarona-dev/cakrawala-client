import axios from "axios";

const baseURL = process.env.BASE_URL;

const publicFetch = axios.create({
  baseURL,
});

export { publicFetch, baseURL };
