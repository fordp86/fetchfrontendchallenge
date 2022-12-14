import React from "react";
import { Container, Stack } from "react-bootstrap";

const ThankYou = () => {
  return (
    <Container>
      <Stack gap={3} className="col-md-7 mx-auto p-3 thanks">
        <h1>Thank You</h1>
        <p>
          Thank you for your submission. A recruiter will follow up with you
          soon.
        </p>
      </Stack>
    </Container>
  );
};

export default ThankYou;
