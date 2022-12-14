import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { Container, Button, Form, Stack } from "react-bootstrap";

const SignUp = () => {
  // Set Form State as Empty
  let [newUser, setNewUser] = useState({
    fullname: "",
    email: "",
    passowrd: "",
    occupation: "",
    state: "",
  });

  //use UserContext
  let { createUser } = useContext(UserContext);
  //Create Navigation Variable
  let navigate = useNavigate();

  //Create Form Change Handler
  function handleChange(event) {
    setNewUser((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
  }

  //Create Form Submit Handler
  function handleSubmit(event) {
    event.preventDefault();
    createUser(newUser)
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
        window.alert("Failed registration: please fillout the entire form");
      });
  }

  return (
    <Container>
      <Stack gap={3} className="col-md-7 mx-auto p-3 signup">
        <h1>SignUp</h1>
      </Stack>
    </Container>
  );
};
export default SignUp;
