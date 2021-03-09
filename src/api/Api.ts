import db from './db.json'
// @ts-ignore
import Geocode from 'react-geocode';

Geocode.setApiKey("AIzaSyAUnnparwjmwwUj4QRy71XI3lUA0iygiZ8");
Geocode.enableDebug();


export function tOrderTaxi() {
    return db
}

export function getAddressNameAS(lat: string, lng: string) {
    return Geocode.fromLatLng(lat, lng).then(
        (response: any) => response.results[0].formatted_address
    )
}

export function calcDistance(from: { lat: number, lan: number }, to: { lat: number, lan: number }) {
    return google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng(from.lat, from.lan),
        new google.maps.LatLng(to.lat, to.lan)
    )
}

export function calcAllCord(from: { lat: number, lan: number }) {
    let data: any = []
    tOrderTaxi().data.crews_info.forEach((laLg: any) => {
        data.push(Math.floor(calcDistance(from, {lat: laLg.lat, lan: laLg.lon})) / 1000)
    })
    return data
}

export function orderTaxi(data: {
    source_time: number, address: [{
        address: string
        lat: number
        lon: number
    }],
    crew_id: number
}) {
    console.log(data)
}
