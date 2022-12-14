import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import ThankYou from "./components/ThankYou";
import { UserProvider } from "./contexts/UserProvider";
import { Navbar, Container, Nav } from "react-bootstrap";

function App() {
  return (
    <UserProvider>
      <div>
        <BrowserRouter>
          <Navbar expand="lg" id="nav">
            <Container className="p-3">
              <Navbar.Brand href="/signup">Fetch Sign Up</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="justify-content-end"
              >
                <Nav>
                  <Nav.Link href="/signup">Sign Up</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
            <Route exact path="/" element={<SignUp />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/thanks" element={<ThankYou />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
