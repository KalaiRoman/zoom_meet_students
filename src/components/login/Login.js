import { memo, useState,useEffect } from "react";
import { Row, Col ,Form } from "react-bootstrap";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import "./styles/Signin.scss";
import Spinner from "react-bootstrap/Spinner";
import React from "react";
import { ToastError, ToastSuccess } from "../../middleware/ToastModel";
import {useDispatch,useSelector} from 'react-redux';
import { useApi } from "../../apis/GetMethod";
import { loginUserToken } from "../../redux/Reducers/Login_Reducers";
import { loginUser } from "../../services/Auth_services";
const Login = memo(() => {
  const socket=useSelector((state)=>state?.socket?.socket)
  const {data, loading, error, fetchData}=useApi()
  let history = useNavigate();
  const dispatch=useDispatch();

  const [getparams,setGetParams]=useSearchParams();

  



  const paramsURL=window.location.href.includes("roomID");
  const loginReducer=useSelector((state)=>state?.login);
  const [formState, setFormState] = useState(false);
  const [showicon, setShowicon] = useState(false);
  const [user,setUser]=useState({
    email:"",
    password:""
  })
  const {email,password}=user;
  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  const handleSubmitUser = async (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!emailRegex.test(email)) {
      ToastError("Invalid email address");
      return;
    }
    
    if (!passwordRegex.test(password)) {
      ToastError("Password must be at least 8 characters, with uppercase, lowercase, number, and special character");
      return;
    }
    if (email && password) {
      setFormState(true);  
      const datas = { email, password,role:"student" };
      try {
        const response=await loginUser(datas);

        if(paramsURL)
        {
          ToastSuccess("User Login Successfully!!");
          setTimeout(() => {
    window.location.assign(window.location.href);
            // window.location.reload(false)
          }, 500);
          dispatch(loginUserToken(response?.token));
        }
        else{
          ToastSuccess("User Login Successfully!!");
          setTimeout(() => {
          history("/dashboard"); 
            // window.location.reload(false)
          }, 500);
          dispatch(loginUserToken(response?.token));
        }
           
      } catch (err) {
        ToastError("An error occurred during login.");
      } finally {
        setFormState(false);  
      }
    }
  };


  useEffect(()=>{

  },[data])



  if(loginReducer?.token)
  {
return <Navigate to="/dashboard"/>
  }
  else
  {
    return (
      <div className="singin-main-section">
        <div className="inside-section-main">
          <div className="left-section-signin d-md-block d-none">
            <img src={"https://www.studentcover.in/login-illustration.svg"} alt="no image" className="logo2" />
          </div>
          <div className="right-section-signin">
            <div className="inside-right-section-singnin">
              <div className="first-section-right">
              </div>
              <div className="second-section-right">
                <div>
                <div className="logo">
              {/* <img src={logo} alt="no image" className="logo1" /> */}
            </div>
                </div>
                <div className="mt-5">
                  <span className="signin-section">Sign in User</span>{" "}
                </div>
                <div className="mt-3">
                 
                    <Row>
                      <Col sm="12" md="12" lg="12" className="form-group">
                        <Form.Group controlId="firstName">
                          <Form.Label className="label-form">Email</Form.Label>
                          <Form.Control
                            name="email"
                            type="email"
                            value={email}
                            onChange={handleChange}

                            
                          />
                          <Form.Text className="text-danger">
                            
                          </Form.Text>
                         
                        </Form.Group>
                      </Col>
                      <Col sm="12" md="12" lg="12" className="form-group">
                        <Form.Group controlId="password">
                          <Form.Label className="label-form">
                            Password
                          </Form.Label>
                          <div className="password-section-icons">
                            <Form.Control
                              name="password"
                              value={password}
                              onChange={handleChange}
                              type={showicon ? "text" : "password"}
                            />
                            <div className="passsword-svg mt-2">
                              {showicon ? (
                                <svg
                                  width="20"
                                  onClick={() => setShowicon(!showicon)}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M8.09756 12C8.09756 14.1333 9.8439 15.8691 12 15.8691C14.1463 15.8691 15.8927 14.1333 15.8927 12C15.8927 9.85697 14.1463 8.12121 12 8.12121C9.8439 8.12121 8.09756 9.85697 8.09756 12ZM17.7366 6.04606C19.4439 7.36485 20.8976 9.29455 21.9415 11.7091C22.0195 11.8933 22.0195 12.1067 21.9415 12.2812C19.8537 17.1103 16.1366 20 12 20H11.9902C7.86341 20 4.14634 17.1103 2.05854 12.2812C1.98049 12.1067 1.98049 11.8933 2.05854 11.7091C4.14634 6.88 7.86341 4 11.9902 4H12C14.0683 4 16.0293 4.71758 17.7366 6.04606ZM12.0012 14.4124C13.3378 14.4124 14.4304 13.3264 14.4304 11.9979C14.4304 10.6597 13.3378 9.57362 12.0012 9.57362C11.8841 9.57362 11.767 9.58332 11.6597 9.60272C11.6207 10.6694 10.7426 11.5227 9.65971 11.5227H9.61093C9.58166 11.6779 9.56215 11.833 9.56215 11.9979C9.56215 13.3264 10.6548 14.4124 12.0012 14.4124Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              ) : (
                                <svg
                                  width="20"
                                  onClick={() => setShowicon(!showicon)}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M9.80327 15.2526C10.4277 15.6759 11.1888 15.9319 11.9987 15.9319C14.1453 15.9319 15.8919 14.1696 15.8919 12.0037C15.8919 11.1866 15.6382 10.4186 15.2186 9.78855L14.1551 10.8617C14.3307 11.1964 14.4283 11.5902 14.4283 12.0037C14.4283 13.3525 13.3354 14.4551 11.9987 14.4551C11.5889 14.4551 11.1986 14.3567 10.8668 14.1795L9.80327 15.2526ZM18.4288 6.54952C19.8436 7.84907 21.0438 9.60149 21.9415 11.7083C22.0195 11.8954 22.0195 12.112 21.9415 12.2892C19.8534 17.1921 16.1358 20.1259 11.9987 20.1259H11.9889C10.1058 20.1259 8.30063 19.5056 6.71018 18.3735L4.81725 20.2834C4.67089 20.4311 4.4855 20.5 4.30011 20.5C4.11472 20.5 3.91957 20.4311 3.78297 20.2834C3.53903 20.0373 3.5 19.6435 3.69515 19.358L3.72442 19.3186L18.1556 4.75771C18.1751 4.73802 18.1946 4.71833 18.2044 4.69864L18.2044 4.69863C18.2239 4.67894 18.2434 4.65925 18.2532 4.63957L19.1704 3.71413C19.4631 3.42862 19.9217 3.42862 20.2046 3.71413C20.4974 3.99964 20.4974 4.4722 20.2046 4.75771L18.4288 6.54952ZM8.09836 12.0075C8.09836 12.2635 8.12764 12.5195 8.16667 12.7558L4.55643 16.3984C3.5807 15.2564 2.7318 13.8781 2.05854 12.293C1.98049 12.1158 1.98049 11.8992 2.05854 11.7122C4.14662 6.80933 7.86419 3.88534 11.9916 3.88534H12.0013C13.3966 3.88534 14.7529 4.22007 16.0018 4.85015L12.7429 8.13841C12.5087 8.09903 12.255 8.0695 12.0013 8.0695C9.84494 8.0695 8.09836 9.83177 8.09836 12.0075Z"
                                    fill="currentColor"
                                  ></path>{" "}
                                </svg>
                              )}
                            </div>
                          </div>
                          <Form.Text className="text-danger">
                          </Form.Text>
                        </Form.Group>
                      </Col>
                      <Col
                        lg="12"
                        sm="12"
                        md="12"
                        className="d-flex  forget-password-section justify-content-end"
                      >
                        <Link to="/forgot-password">Forgot Password?</Link>
                      </Col>
                    </Row>
                    <div className="button-signin-sections mt-3">
                      <button className="logout-btn-active" onClick={handleSubmitUser}>
                        {loading ? (
                          <>
                            <Spinner
                              as="span"
                              animation="border"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                            />
                            <span className="ms-2">Loading...</span>
                          </>
                        ) : (
                          <>Sign In</>
                        )}
                      </button>
                    </div>
                 
                </div>
              </div>
              <div className="third-section-right"></div>
            </div>
          </div>
        </div>
      </div>
    ); 
  }
    
});
Login.displayName = "Login";
export default Login;
