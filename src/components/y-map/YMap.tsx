import React from "react";
import {Map, TrafficControl, YMaps, SearchControl} from "react-yandex-maps";

const YMap = () => {


    return <YMaps>
        <Map
            defaultState={{
                center: [55.751574, 37.573856],
                zoom: 9,
                controls: [],
            }}
        >
            <TrafficControl options={{float: 'right'}}/>
            <SearchControl options={{float: 'right'}}/>
        </Map>
    </YMaps>
}
export default YMap