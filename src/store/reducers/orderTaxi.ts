import {ADDRESS_GET_SET_REQUEST} from "../actions/orederTaxi";

interface initialStateI {
    name?: string
}

const initialState: initialStateI = {
    name: ''

};
export default function reducer(state: initialStateI = initialState, action: { type: string, payload: any }) {

    switch (action.type) {
        // @ts-ignore
        case ADDRESS_GET_SET_REQUEST : {
            return {...state, name: action.payload}
        }
        default: {
            return state
        }
    }
}