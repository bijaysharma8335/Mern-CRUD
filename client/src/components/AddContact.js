import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/ContactSlice";
import { useNavigate } from "react-router-dom";


const AddContact = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("1", name);
    // console.log("2", email);
    // console.log("3", mobile);
    // console.log("4", address);
    // console.log("5", gender);

    const newContacts = {
      name,
      email,
      mobile,
      address,
      gender,
    };
    console.log(newContacts);

    dispatch(addContact(newContacts));
    navigate("/")
  };



  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <h1 className='text-center'>CRUD</h1>
          </Col>
        </Row>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className='mb-2'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' value={name} onChange={(e) => setName(e.target.value)} />
              </Form.Group>
              <Form.Group className='mb-2'>
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type='number'
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </Form.Group>
              <Form.Group className='mb-2'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className='mb-2'>
                <Form.Label>Gender</Form.Label>
                <div className='d-flex' value={gender} onChange={(e) => setGender(e.target.value)}>
                  <Form.Check type='radio' value='M' name='gender' className='mx-2' />
                  Male <Form.Check type='radio' value='F' name='gender' className='mx-2' />
                  Female
                </div>
              </Form.Group>
              <Form.Group className='mb-2'>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as='textarea'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>
              <Button type='submit' variant='danger' size='lg'>
                Save
              </Button>
            </Form>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </>
  );
};

export default AddContact;
