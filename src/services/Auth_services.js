// import PostMethod from './../apis/PostMethod';

import axiosInterceptor from "../axiosconfig/interceptor";
export const apiGet = async (url) => {
    try {
      const response = await axiosInterceptor.get(`${url}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error fetching data');
    }
  };
  
  export const apiPost = async (url, data) => {
    try {
      const response = await axiosInterceptor.post(`${url}`, data);

      console.log(response,'response')
      return response;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error posting data');
    }
  };


  export const loginUser=async(data)=>{
    try {
      const response = await axiosInterceptor.post(`/auth/zoom/login`, data);
      return response?.data;
    } catch (error) {
      return error;
    }
  }