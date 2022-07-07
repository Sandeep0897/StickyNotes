import React, { useState,useEffect } from "react";
import MainScreen from "../../Components/MainScreen";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Loading from "../../Components/spinner";
import Error from "../../Components/Error";
import "../login/login.css";
import { useDispatch, useSelector } from "react-redux";
import {userLoginAction} from "../../actions/user_action";
import {useNavigate} from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch =useDispatch();
  const userLogin = useSelector((state)=>state.userLogin);
  const {loading,error,userInfo}=userLogin;
  const navigate=useNavigate();

  useEffect(()=>{
    if(userInfo){
      navigate('/notes')
    }
  },[navigate,userInfo])

  const HandleClick = async (e) => {
    e.preventDefault();
    dispatch(userLoginAction(email,password))

  }

  return (
    <MainScreen title="LOGIN">
      {error && <Error>{error}</Error>}
      {loading ? <Loading /> :
      <div className="loginContainer">
      <Form onSubmit={HandleClick}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>

        <Button variant="warning" type="submit">
          Submit
        </Button>
      </Form>
      </div>}
    </MainScreen>
   
  );
}

export default Login;
