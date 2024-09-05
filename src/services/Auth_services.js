// import PostMethod from './../apis/PostMethod';

import axiosInterceptor from "../axiosconfig/interceptor";

// export const Login_services=async(datas)=>{
//     try {
//        return ""
//     } catch (error) {
//         return{
//            error:error?.response?.data?.message
            
//         }
//     }
// }


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
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error posting data');
    }
  };