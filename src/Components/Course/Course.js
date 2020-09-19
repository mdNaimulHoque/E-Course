import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import fakeData from '../../fakeData/fakeData';
import { Alert } from 'react-bootstrap';
import './Course.css';
import Order from '../Order/Order';

const Course = () => {
    const data = fakeData;
    const [courses, setCourses] = useState(data);
    const [counts, setCounts] = useState([]);
    const handleAddOrder = (course) => {
        console.log('order added', course);
        const newCount = [...counts, course];
        setCounts(newCount);
    }

    return (
        <div className="course-container">
            <div className="course-cart">
                {
                    courses.map(course => <Cart course={course} handleAddOrder={handleAddOrder}></Cart>)
                }
            </div>
            <div className="course-order">
                <Alert variant="success">
                    <h5>Order Summary</h5>
                </Alert>
                <Order count={counts}></Order>
            </div> 
        </div>
    );
};

export default Course;