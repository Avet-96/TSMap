import React from "react";
import GMap from "../y-map/GMap";
import {connect} from "react-redux";
import IMain from "../../interfece/IMain";


const Main: React.FC<IMain> = (props: any) => {
    const orderTax = () => {
        let data = {
            source_time: 12,
            address: [{
                address: props.name,
                lat: props.latLng.lat,
                lan: props.latLng.lan
            }],
            crew_id: props.check[0].crew_id
        }
        props.orderTaxi(data)
    }
    return (<div className='d-flex map_styles'>
        <GMap />
        <div className='tax'>
            <h2>TAXI INFO</h2>
            {props.check.length > 0 ?
                < div className='taxi_block'>
                    <span> {props.check[0].data.car_mark}</span>
                    <span>{props.check[0].data.car_model}</span>
                    <span>{props.check[0].data.car_color}</span>
                    <span>{props.check[0].data.car_number}</span>
                    <span>{props.check[0].data.driver_name}</span>
                    <span>{props.check[0].data.driver_phone}</span>
                    <span>{props.check[0].km + 'M'}</span>
                    <button className='btn btn-info '
                            onClick={orderTax}
                    >Order Taxi
                    </button>
                </div>
                : ''
            }
        </div>
    </div>)
}

const mapStateToProps = (state: { orderTaxi: { check: any, name: string, latLng: { lat: number, lan: number } } }) => ({
    check: state.orderTaxi.check,
    name: state.orderTaxi.name,
    latLng: state.orderTaxi.latLng,

});

const mapDispatchToProps = {};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Main);

export default Container
