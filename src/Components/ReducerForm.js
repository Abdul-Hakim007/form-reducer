import React, { useReducer } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './recuerform.css';

const ReducerForm = () => {


  const initialState = {
    email: "",
    password: "",
    address: "",
    secondAddress: "",
    city: "",
    state: "",
    zip: 0,
    term: false,

  };

  const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
      case 'EMAIL':
        return {
          ...state,
          email: action.payload.value,
        };
      case 'PASSWORD':
        return {
          ...state,
          password: action.payload.value,
        };
      case 'FIRST_ADDRESS':
        return {
          ...state,
          first_address: action.payload.value,
        };
      case 'SECOND_ADDRESS':
        return {
          ...state,
          second_address: action.payload.value,
        };
      case 'CITY':
        return {
          ...state,
          password: action.payload.value,
        };
      case 'STATE':
        return {
          ...state,
          state: action.payload.value,
        };
      case 'ZIP':
        return {
          ...state,
          zip: action.payload.value,
        };
      case 'TOGGLE':
        return {
          ...state,
          term: !state.term,
        };
      default:
        return state;
    }
  }


  const [state, dispatch] = useReducer(reducer, initialState);

  const submit = (e) => {
    e.preventDefault();
    console.log(state)
  }



  return (
    <div className='form'>
      <Form onSubmit={submit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onBlur={(e) => dispatch({
              type: "EMAIL",
              payload: { value: e.target.value }
            })} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onBlur={(e) => dispatch({
              type: 'PASSWORD',
              payload: { value: e.target.value }
            })} />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" onBlur={(e) => dispatch({
            type: 'FIRST_ADDRESS',
            payload: { value: e.target.value }
          })} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" onBlur={(e) => dispatch({
            type: 'SECOND_ADDRESS',
            payload: { value: e.target.value }
          })} />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control onBlur={(e) => dispatch({
              type: 'CITY',
              payload: { value: e.target.value }
            })} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose..." onChange={(e) => dispatch({
              type: 'STATE',
              payload: { value: e.target.value }
            })} >
              <option>Select</option>
              <option>Gazipur</option>
              <option>Uttara</option>
              <option>Dhaka</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control onBlur={(e) => dispatch({
              type: 'ZIP',
              payload: { value: e.target.value }
            })} />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" onClick={() => dispatch({ type: 'TOGGLE' })} />
          <Button variant="primary" type="submit" disabled={!state.term}>
          Submit
        </Button>
        </Form.Group>    
      </Form>
    </div>
  );
};

export default ReducerForm;