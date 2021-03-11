import React from 'react';
import './Footer.css'
import OrderForm from "../order-blocks/OrderForm";
import {tOrderTaxi} from "../../api/Api";
import {connect} from "react-redux";
import {checkTaxi} from "../../store/actions/orederTaxi";


const Footer = (props: any) => {
    const handleClick = (driver: any, cord: number) => {
        console.log(driver, cord)
        console.log(props.checkTaxi(driver, cord))
    }
    return (
        <footer id="dk-footer" className="dk-footer">
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="col-md-12 bac_footer col-lg-6">
                        <h2 className='text-center'>Свабоднэ такси</h2>
                        {props.taxiDist.length > 0 ? tOrderTaxi().data.crews_info.map((taxis: any, index) =>
                            <div className='d-flex justify-content-around texi'
                                 key={taxis.crew_id}
                                 onClick={() => handleClick(taxis, props.taxiDist[index])}
                            >
                                <span>{taxis.car_mark}</span>
                                <span>{taxis.car_model}</span>
                                <span>{taxis.car_color}</span>
                                <span>{taxis.car_number}</span>
                                <span>{taxis.driver_name}</span>
                                <span>{taxis.driver_phone}</span>
                                <span>{props.taxiDist[index] + 'M'}</span>
                            </div>
                        ) : ''}
                    </div>
                    <div className="col-md-12 col-lg-5">
                        {// @ts-ignore
                            <OrderForm/>}

                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <span>Copyright © 2019, All Right Reserved Seobin</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="back-to-top" className="back-to-top">
                <button className="btn btn-dark" title="Back to Top">
                    <i className="fa fa-angle-up"/>
                </button>
            </div>
        </footer>
    );

}


const mapStateToProps = (state: { orderTaxi: { taxiDist: any } }) => ({
    taxiDist: state.orderTaxi.taxiDist,
});

const mapDispatchToProps = {
    checkTaxi
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Footer);

export default Container
