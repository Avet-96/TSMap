export const ADD_ALL_TAXIS: string = 'ADD_ALL_TAXIS'
export const GET_ADDRESS_NAME: string = 'GET_ADDRESS_NAME'
export const MOUTON_MARK: string = 'MOUTON_MARK'
export const TAXI_DIST: string = 'TAXI_DIST'
export const CHECK_TAXI: string = 'CHECK_TAXI'
export const CLEAR_DATA: string = 'CLEAR_DATA'


export function addAllTaxi(address: string) {
    return {type: ADD_ALL_TAXIS, payload: address}
}

export function getAddressName(name: string) {
    return {
        type: GET_ADDRESS_NAME, payload: name
    }
}

export function moutonMarkInLatLng(lat: number, lng: number) {
    return {
        type: MOUTON_MARK, payload: {lat, lng}
    }
}

export function taxiDist(data: [number]) {
    return {
        type: TAXI_DIST, payload: data
    }
}

export function checkTaxi(data: {}, km: number) {
    return {
        type: CHECK_TAXI, payload: {data, km}
    }
}

export function clearData() {
    return {
        type: CLEAR_DATA,
    }
}
