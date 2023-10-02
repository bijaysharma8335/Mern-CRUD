import { Button, Col, Container, Row, Table } from "react-bootstrap";
// import { contact } from "./contact";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getContact, setContact } from "../redux/ContactSlice";
import { useEffect, useState } from "react";
import axios from "axios";
// import setContact

const DisplayContact = () => {
  const contacts = useSelector(getContact);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [contacts, setContacts] = useState([]);


  useEffect(() => {
   axios.get('http://localhost:8000/contacts/display').then(
    (res)=>{
    console.log("res", res.data)
    // setContacts(res.data);
    dispatch(setContact(res.data));
    }
   )
  }, [])


  

  const handleDelete = (e, id) => {
    e.preventDefault();
    axios.delete(`http://localhost:8000/contacts/delete/${id}`).then(
      (res) =>{
        console.log("deli", res.data);
        // setContacts(res.data);
        dispatch(setContact(res.data));
      }
    )
    
  }


  return (
    <Container className='p-2'>
      <Row>
        <Col md={12}>
          <Button
            type='submit'
            variant='danger'
            size='lg'
            onClick={() => navigate("/add")}
          >
            Add Contact
          </Button>
        </Col>
      </Row>

      <Table>
        <thead>
          <tr>
            <th>sn</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Mobile</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((x, index) => (
            <tr>
              {/* <td>{x.id}</td> */}
              <td>{index+1}</td>

              <td>{x.name}</td>
              <td>{x.email}</td>
              <td>{x.address}</td>
              <td>{x.mobile}</td>
              <td>{x.gender}</td>
              <td>
                <Button
                  type='submit'
                  variant='primary'
                  size='lg'
                  onClick={() => navigate(`/edit/${x._id}`, { state: x })}
                >
                  Edit
                </Button>
                <Button type='submit' variant='danger' size='lg' onClick={(e) => handleDelete(e, x._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default DisplayContact;
