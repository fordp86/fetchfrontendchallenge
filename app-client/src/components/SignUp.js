import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { Container, Button, Form, Stack } from "react-bootstrap";

const SignUp = () => {
  //Create Form Validation
  const [validated, setValidated] = useState(false);

  // Set Form State as Empty
  let [newUser, setNewUser] = useState({
    name: "",
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
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      createUser(newUser)
        .then(() => {
          navigate("/thanks");
        })
        .catch((error) => {
          console.log(error);
          window.alert(
            "Failed registration: please check you input and try again."
          );
        });
    }

    setValidated(true);
  }

  return (
    <UserContext.Consumer>
      {({ user }) => {
        let occupations = user.occupations;
        let states = user.states;
        return (
          <Container>
            <Stack gap={3} className="col-md-7 mx-auto p-3 signup">
              <h1>Sign Up</h1>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    required
                    type="Text"
                    placeholder="Bob Barker"
                    name="name"
                    value={newUser.name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="bob@email.com"
                    name="email"
                    value={newUser.email}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    name="password"
                    value={newUser.password}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Occupation</Form.Label>
                  <Form.Select
                    required
                    type="select"
                    name="occupation"
                    onChange={handleChange}
                  >
                    <option>-Your Occupation-</option>
                    {Array.isArray(occupations) &&
                      occupations.map((o) => {
                        return (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        );
                      })}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>State</Form.Label>
                  <Form.Select
                    required
                    type="select"
                    name="state"
                    onChange={handleChange}
                  >
                    <option>-Your State-</option>
                    {Array.isArray(states) &&
                      states.map((s) => {
                        return (
                          <option key={s.abbreviation} value={s.abbreviation}>
                            {s.abbreviation}
                          </option>
                        );
                      })}
                  </Form.Select>
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit" size="lg">
                    Sign Up
                  </Button>
                </div>
              </Form>
            </Stack>
          </Container>
        );
      }}
    </UserContext.Consumer>
  );
};
export default SignUp;
