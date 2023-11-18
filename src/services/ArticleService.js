import axios from "axios";
import { baseURL } from "./urls";

export const saveArticle = (article) => {
    return axios.post(`${baseURL}/v1/article`, article);
  };

  export const getAllArticles = () =>{
    return axios.get(`${baseURL}/v1/article`);
  }

  export const getArticleById = (id) =>{
    return axios.get(`${baseURL}/v1/article/get-by-id/${id}`);
  }

  export const updateArticle =(article) =>{
    return axios.put(`${baseURL}/v1/article`, article);
  }