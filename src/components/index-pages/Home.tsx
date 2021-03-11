import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import {orderTaxi} from "../../api/Api";

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className='container'>
                    <Main orderTaxi={orderTaxi}/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;