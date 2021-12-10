import React from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./styles.css";

export default class Example extends React.Component {
  render() {
    return (
      <div className="formAlign">
        <Form>
          <FormGroup className="text-center">
            <Label for="exampleName" sm={2}>
              Name
            </Label>
            <Col sm={10}>
              <Input
                style={{
                  width: "75%",
                  margin: "0 auto",
                }}
                type="text"
                name="name"
                id="exampleName"
                placeholder="Nombre"
              />
            </Col>
          </FormGroup>

          <FormGroup className="text-center">
            <Label for="exampleEmail" sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Input
                style={{
                  width: "75%",
                  margin: "0 auto",
                }}
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Email"
              />
            </Col>
          </FormGroup>

          <FormGroup className="text-center">
            <Label for="exampleText" sm={2}>
              Text Area
            </Label>
            <Col sm={10}>
              <Input
                style={{
                  width: "75%",
                  margin: "0 auto",
                }}
                type="textarea"
                name="text"
                id="exampleText"
              />
            </Col>
          </FormGroup>
          <FormGroup className="calend">
            <Label for="calendar" sm={2}>
              Date of birth
            </Label>
            <Col sm={4}>
              <Input
                style={{
                  marginLeft: "32.5%",
                }}
                type="date"
                name="date"
                id="calendar"
                placeholder="dob"
              />
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col lg={{ size: 2, offset: 5 }}>
              <Button>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
