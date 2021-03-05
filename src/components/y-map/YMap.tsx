import React from "react";
import {Map, TrafficControl, YMaps, SearchControl} from "react-yandex-maps";

const YMap = () => {


    return <YMaps enterprise
                  query={{
                      apikey: '1133cf35-af94-4e43-b7e1-db9ad1b07808',
                  }}>
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