import React, { useState, useEffect } from "react";
import MainScreen from "../../Components/MainScreen";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../register/register.css";
import Loading from "../../Components/spinner";
import ErrorMessage from "../../Components/Error";
import { useDispatch, useSelector } from "react-redux";
import { userRegisterAction } from "../../actions/user_action";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [Telephone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  
  
  
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  const navigate = useNavigate();

  

  const Handleclick =  (event) => {
    event.preventDefault();
    if (Telephone.length === 10) {
      if (password !== confirmPassword) {
        setMessage("Passwords do not match");
      } else {
        dispatch(userRegisterAction(name, email, password, Telephone));
      }
    } else {
      setMessage("Invalid Phone number");
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/notes");
    }
  }, [userInfo, navigate]);

  return (
    <MainScreen title="SIGN UP">
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {message && <ErrorMessage>{message}</ErrorMessage>}
      {loading ? (
        <Loading />
      ) : (
        <Form onSubmit={Handleclick}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter user name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>

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

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={confirmPassword}
              onChange={(e) => {
                setconfirmPassword(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Telephone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone no"
              value={Telephone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="my-2 button">
            SIGN UP/REGISTER
          </Button>
        </Form>
      )}
    </MainScreen>
  );
}

export default Register;
