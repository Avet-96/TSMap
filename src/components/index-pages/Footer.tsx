import React, {Component} from 'react';
import './Footer.css'
import OrderForm from "../order-blocks/OrderForm";

class Footer extends Component {
    render() {
        return (
            <footer id="dk-footer" className="dk-footer">
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-md-12 bac_footer col-lg-6">
                        <h2 className='text-center'>Свабоднэ такси</h2>

                        </div>
                        <div className="col-md-12 col-lg-5">
                            <OrderForm/>
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
}

export default Footer;