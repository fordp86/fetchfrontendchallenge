import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { Container, Button, Form, Stack } from "react-bootstrap";

const SignUp = () => {
  // Set Form State as Empty
  let [newUser, setNewUser] = useState({
    fullname: "",
    email: "",
    password: "",
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
        <Form onSubmit={handleSubmit}>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="Text"
            placeholder="Bob Barker"
            name="fullname"
            value={newUser.fullname}
            onChange={handleChange}
          />
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="bob@email.com"
            name="email"
            value={newUser.email}
            onChange={handleChange}
          />
          <Form.Label>Passowrd</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={newUser.password}
            onChange={handleChange}
          />
          <Form.Label>Occupation</Form.Label>
          <Form.Control
            type="text"
            placeholder="Gameshow Host"
            name="occupation"
            value={newUser.occupation}
            onChange={handleChange}
          />
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            placeholder="CA"
            name="state"
            value={newUser.state}
            onChange={handleChange}
          />
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </Stack>
    </Container>
  );
};
export default SignUp;
