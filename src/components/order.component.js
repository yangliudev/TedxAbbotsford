import React, { Component } from "react";
import Form from 'react-bootstrap/Form';

export default class Order extends Component {
    render() {
        return (
            
            <Form>
             <Form.Group controlId = "input-group date.datetimepicker1">
               <Form.Label>6. Name of Beneficiary</Form.Label>
               <Form.Control type="email" />
             </Form.Group>
             
             <Form.Group controlId="exampleForm.ControlInput1">
               <Form.Label>7. Date of Service</Form.Label>
               <Form.Control type="email" />
             </Form.Group>
            
             <Form.Group controlId="exampleForm.ControlInput1">
               <Form.Label>8. Time of Service</Form.Label>
               <Form.Control type="email" />
             </Form.Group>

             <Form.Group controlId="exampleForm.ControlInput1">
               <Form.Label>9. Address (Street name and number)</Form.Label>
               <Form.Control type="email" />
             </Form.Group>

             <Form.Group controlId="exampleForm.ControlInput1">
               <Form.Label>10. City</Form.Label>
               <Form.Control type="email" />
             </Form.Group>

             <Form.Group controlId="exampleForm.ControlInput1">
               <Form.Label>11. Postal Code</Form.Label>
               <Form.Control type="email" />
             </Form.Group>

             <Form.Group controlId="exampleForm.ControlInput1">
               <Form.Label>12. Offered by</Form.Label>
               <Form.Control type="email" />
             </Form.Group>

             <Form.Group controlId="exampleForm.ControlInput1">
               <Form.Label>13. Youre Phone Number</Form.Label>
               <Form.Control type="email"  placeholder="+1-234-567-8910"/>
             </Form.Group>

             <Form.Group controlId="exampleForm.ControlInput1">
               <Form.Label>14. Youre Email</Form.Label>
               <Form.Control type="email"  placeholder="name@example.com" />
             </Form.Group>

             <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>15. Additional Comments</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>

             </Form>
                
      
            ); 
    }
}