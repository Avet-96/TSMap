import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className='container'>
                    <Main/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;