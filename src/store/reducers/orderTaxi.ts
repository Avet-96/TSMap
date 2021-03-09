import {ADD_ALL_TAXIS, CHECK_TAXI, CLEAR_DATA, GET_ADDRESS_NAME, MOUTON_MARK, TAXI_DIST} from "../actions/orederTaxi";
import {tOrderTaxi} from "../../api/Api";


interface initialStateI {
    name?: string,
    taxis?: any
    address?: any
    marAddressNAme?: string,
    latLng: {
        lat: number
        lng: number
    },
    taxiDist: [],
    check: []
}

const initialState: initialStateI = {
    name: '',
    taxis: [],
    address: [],
    latLng: {lat: 0, lng: 0},
    taxiDist: [],
    check: []
};


export default function reducer(state: initialStateI = initialState, action: { type: string, payload: any }) {
    switch (action.type) {
        case ADD_ALL_TAXIS : {
            let allTaxi = tOrderTaxi()
            return {...state, taxis: allTaxi.data.crews_info}
        }
        case GET_ADDRESS_NAME : {
            return {...state, name: action.payload}
        }
        case MOUTON_MARK : {
            return {...state, latLng: {...action.payload}}
        }
        case TAXI_DIST: {
            return {...state, taxiDist: action.payload}
        }
        case CHECK_TAXI: {
            return {...state, check: [action.payload]}
        }
        case CLEAR_DATA: {
            return {...state, taxis: [], address: [], latLng: {lat: 0, lng: 0}, taxiDist: [], check: []}
        }
        default: {
            return state
        }
    }
}
