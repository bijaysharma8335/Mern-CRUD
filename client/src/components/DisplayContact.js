import { Button, Col, Container, Row, Table } from "react-bootstrap";
// import { contact } from "./contact";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getContact } from "../redux/ContactSlice";

const DisplayContact = () => {
  const contacts = useSelector(getContact);
  const navigate = useNavigate();
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
                  onClick={() => navigate(`/edit/${x.id}`, { state: x })}
                >
                  Edit
                </Button>
                <Button type='submit' variant='danger' size='lg'>
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
