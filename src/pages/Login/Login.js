import React,  { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import "./login.css";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setcredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const {loading, error, dispatch } = useContext(AuthContext);
  // const navigate=useNavigate();
  const handleChange=(e)=>{
    console.log(e.target.value);
    setcredentials((prev)=>({...prev,[e.target.id]:[e.target.value]}))
  }
 const handleClick=async e=>{
    e.preventDefault();
    dispatch({type:'LOGIN_START'})
    try {
      ///
        const sendData = () => {
    const data = { message: 'Hello, server!' }; // Data to be sent

    fetch('http://localhost:4000/api/data', {
      method: 'Get',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
sendData();
      ///
        const res=await axios.post("http://localhost:4000/api/data",credentials)
        dispatch({type:'LOGIN_SUCCESS',payload:res.data})
        navigate("/")
    } catch (error) {
        dispatch({type:'LOGIN_FAILURE',payload:error.response.data})
    }
 }
  return (
    <div className="">
		<hr/>
    <div className="login">
      <div className="lContainer">
      <h2>LOGIN HERE</h2>
        <input
          type="text"
          placeholder="Enter Email"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="Enter Password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button onClick={handleClick} className="lButton">Login</button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
    </div>
  );
};

export default Login;
