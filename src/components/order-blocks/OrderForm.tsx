import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap'

class OrderForm extends Component {
    render() {
        return (
            <Form.Group>
                <Form.Control type="text" placeholder="Одкуда"/>
                <br/>
                <Button variant="success">Заказать</Button>
            </Form.Group>
        );
    }
}

export default OrderForm;