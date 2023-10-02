import axios from "axios";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import {  setContact } from "../redux/ContactSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";




const EditContact = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(location.state);

  const [name, setName] = useState(location.state.name);
  const [email, setEmail] = useState(location.state.email);
  const [mobile, setMobile] = useState(location.state.mobile);
  const [address, setAddress] = useState(location.state.address);
  const [gender, setGender] = useState(location.state.gender);

  

  const handleUpdate = (e) => {
    e.preventDefault();

    const newContacts = {
      name,
      email,
      mobile,
      address,
      gender,
    };
    // console.log(newContacts);

    
    axios.patch(`http://localhost:8000/contacts/update/${location.state._id}`, newContacts).then((res)=>{
       console.log("ui", res.data);
       dispatch(setContact(res.data));
       navigate("/");
    })
  }

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
            <Form onSubmit={handleUpdate}>
              <Form.Group className='mb-2'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' value={name} onChange={(e)=> setName(e.target.value)}/>
              </Form.Group>
              <Form.Group className='mb-2'>
                <Form.Label>Mobile</Form.Label>
                <Form.Control type='number' value={mobile} onChange={(e)=> setMobile(e.target.value)}/>
              </Form.Group>
              <Form.Group className='mb-2'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
              </Form.Group>
              <Form.Group className='mb-2'>
                <Form.Label>Gender</Form.Label>
                <div className='d-flex' onChange={(e)=> setGender(e.target.value)}>
                  <Form.Check
                    type='radio'
                    value='M'
                    name='gender'
                    className='mx-2'
                    checked = {gender=== "M"}
                  />
                  Male{" "}
                  <Form.Check
                    type='radio'
                    value='F'
                    name='gender'
                    className='mx-2'
                    checked = {gender=== "F"}
                  />
                  Female
                </div>
              </Form.Group>
              <Form.Group className='mb-2'>
                <Form.Label>Address</Form.Label>
                <Form.Control as='textarea' value={address} onChange={(e)=> setAddress(e.target.value)}/>
              </Form.Group>
              <Button type='submit' variant='danger' size='lg'>
                UPDATE
              </Button>
            </Form>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </>
  );
};

export default EditContact;
