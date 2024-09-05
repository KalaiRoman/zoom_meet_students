import {useState,useCallback} from 'react'
import axiosInterceptor from '../axiosconfig/interceptor';
function PostMethod({url,paramsId}) {
    const [loading,setLoading]=useState(false);
    const [response,setResponse]=useState([]);
    const [error,setErrror]=useState("");
    const PostMehodFetch=useCallback(async(data)=>{
        const apiUrl=paramsId?`${url}/${paramsId}`:url;
        setLoading(true)
        setErrror("");
        try {
            const responseData=await axiosInterceptor.post(apiUrl,data);
            if(responseData)
            {
                setResponse(responseData?.data);
            }
        } catch (error) {
            setLoading(false)
            setErrror("Something Went Wrong Post Method")
        }finally
        {
            setLoading(false);
            setErrror("");
        }
    },[url]);

  return {loading,response,error,PostMehodFetch}
}

export default PostMethod