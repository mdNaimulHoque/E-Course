import React from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css';

const Cart = (props) => {
    const { name, price } = props.course;
    return (
        <div className="cart-container">
            
            <Card style={{ width: '40rem' }}>
                <Card.Body>
                    <Alert variant="primary">
                        <Card.Title>{name}</Card.Title>
                    </Alert>
                    <Card.Text>
                        <Alert variant="success">
                            <p># Advanced {name} Techniques</p>
                        </Alert>
                        <h4>${price}</h4>
                    </Card.Text>
                    <Button variant="success" onClick={() => props.handleAddOrder(props.course)}>Enroll now</Button>
                </Card.Body>
            </Card>
            
        </div>
    );
};

export default Cart;