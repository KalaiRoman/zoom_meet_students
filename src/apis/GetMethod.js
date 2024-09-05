// import { useState } from 'react'
// import axiosInterceptor from '../axiosconfig/interceptor';

// function GetMethod() {
//     const [loading,setLoading]=useState(false);
//     const [response,setResponse]=useState([]);
//     const [error,setErrror]=useState("");
//     const GetMehodFetch=async(url,paramsId)=>{
//         const apiUrl=paramsId?`${url}/${paramsId}`:url;
//         setLoading(true)
//         setErrror("");
//         try {
//             const responseData=await axiosInterceptor.get(apiUrl);
//             if(responseData)
//             {
//                 setResponse(responseData?.data);
//             }
//         } catch (error) {
//             setLoading(false)
//             setErrror("Something Went Wrong Get Method")
//         }finally
//         {
//             setLoading(false);
//             setErrror("");
//         }
//     }
//   return {loading,response,error,GetMehodFetch}
// }

// export default GetMethod

// useApi.js
import { useState, useEffect, useCallback } from 'react';
import { apiGet,apiPost } from '../services/Auth_services';
export const useApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = async (method, url, payload = null) => {
    setLoading(true);
    setError(null);
    try {
      let result;
      if (method === 'GET') {
        result = await apiGet(url);
      } else if (method === 'POST') {
        result = await apiPost(url, payload);
      }
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { data, loading, error, fetchData };
};
