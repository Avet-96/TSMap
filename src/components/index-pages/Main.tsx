import React from "react";
import YMap from "../y-map/YMap";
import {searchCrew} from "../../api/Api";

const Main = () => {
    searchCrew('',[])
    return (<div className='d-flex justify-content-center'>
        <YMap/>
    </div>)
}

export default Main