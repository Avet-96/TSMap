import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap'
import db from '../../api/address.json'
import {connect} from "react-redux";
import './OrderForm.css'
import {addAllTaxi, getAddressName, moutonMarkInLatLng, taxiDist} from "../../store/actions/orederTaxi";
import {calcAllCord} from "../../api/Api";


class OrderForm extends Component {
    constructor(props: {}) {
        super(props);
        this.state = {
            valueName: '',
            addressData: [],
            addressDb: db.address,
            isOpen: false
        }
    }


    handleChange = (e: any) => {
        this.setState({
            valueName: e.target.value,
            isOpen: true
        })
        // @ts-ignore
        this.props.getAddressName('')
    }
    changeSelectData = (data: any) => {
        // @ts-ignore
        const {moutonMarkInLatLng, getAddressName, addAllTaxi, taxiDist} = this.props
        this.setState({
            isOpen: false,
            valueName: data.address
        })
        addAllTaxi()
        moutonMarkInLatLng(data.lan, data.lng)
        getAddressName('')
        taxiDist(calcAllCord({lat: data.lan, lan: data.lng}))
    }

    render() {
        // @ts-ignore
        const {addressDb, isOpen, valueName} = this.state
        // @ts-ignore
        const {name} = this.props
        return (
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Одкуда"
                    value={name !== '' ? name : valueName}
                    onChange={e => this.handleChange(e)}
                />
                {isOpen ? <div className='d-flex flex-column select_menu'>
                    {addressDb.map((adr: any) =>
                        <p key={adr.id} onClick={() => this.changeSelectData(adr)}>{
                            adr.address
                        }</p>
                    )}
                </div> : ''}
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
    getAddressName,
    moutonMarkInLatLng,
    addAllTaxi,
    taxiDist
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(OrderForm);
export default Container
