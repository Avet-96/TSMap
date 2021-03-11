import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap'
import db from '../../api/db/address.json'
import {connect} from "react-redux";
import './OrderForm.css'
import {addAllTaxi, getAddressName, moutonMarkInLatLng, taxiDist} from "../../store/actions/orederTaxi";
import {calcAllCord} from "../../api/Api";
import IOrderForm,{IState} from '../../interfece/IOrderForm'


class OrderForm extends Component <IOrderForm,IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            valueName: '',
            addressDb: db.address,
            isOpen: false
        }
    }

    handleChange = (e: any) => {
        this.setState({
            valueName: e.target.value,
            isOpen: true
        })
        this.props.getAddressName('')
    }
    changeSelectData = (data: any) => {
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
        const {addressDb, isOpen, valueName} = this.state
        const {name} = this.props
        return <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Одкуда"
                    value={name !== '' ? name : valueName}
                    onChange={e => this.handleChange(e)}
                />
                {isOpen ? <div className='d-flex flex-column select_menu'>
                    {addressDb.map((adr: any, i: number) =>
                        <p key={i} onClick={() => this.changeSelectData(adr)}>{
                            adr.address
                        }</p>
                    )}
                </div> : ''}
                <br/>
            </Form.Group>
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
    // @ts-ignore
)(OrderForm);
export default Container
