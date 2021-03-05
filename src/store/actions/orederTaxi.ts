interface searI {
    data: {
        source_time: string, addresses: [{
            address: string,
            lat: number,
            lon: number
        }]
    }
}

const SEARCH_CREW_REQUEST: string = 'SEARCH_CREW_REQUEST'
export const ADDRESS_GET_SET_REQUEST: string = 'ADDRESS_GET_SET_REQUEST'

export function searchCrewAction(data: searI) {
    return {
        type: SEARCH_CREW_REQUEST, payload: data
    }
}
export function setAndGetAddressName(name:string){
    return {
        type: ADDRESS_GET_SET_REQUEST, payload: name
    }
}