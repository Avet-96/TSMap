import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap'
import {setAndGetAddressName} from "../../store/actions/orederTaxi";
import {connect} from "react-redux";
// @ts-ignore
import Geocode from "react-geocode";

class OrderForm extends Component {
    constructor(props: {}) {
        super(props);
        this.state = {
            name: ''
        }
    }

    getLatNng = (name: string) => {
        Geocode.fromAddress(name).then(
            (response: any) => {
                const {lat, lng} = response.results[0].geometry.location;
                console.log(lat, lng);
            },
            (error: any) => {
                console.error(error);
            }
        );
    }
    handleChange = (e: any) => {
        this.setState({name: e.target.value})
        // @ts-ignore
        this.getLatNng(this.state.name)
    }

    render() {

        return (
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Одкуда"
                    value={
                        //@ts-ignore
                        this.props.name || this.state.name}
                    onChange={e => this.handleChange(e)}
                />
                <br/>
                <Button variant="success">Заказать</Button>
            </Form.Group>
        );
    }
}

const mapStateToProps = (state: { orderTaxi: { name: string } }) => ({
    name: state.orderTaxi.name
});

const mapDispatchToProps = {
    setAndGetAddressName
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(OrderForm);
export default Container
