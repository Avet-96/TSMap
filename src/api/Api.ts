import db from './db/db.json'
import Geocode from 'react-geocode';
import {API_KEY} from "./config";

Geocode.setApiKey(API_KEY);
Geocode.enableDebug();


function tOrderTaxi() {
    return db
}

function getAddressNameAS(lat: string, lng: string) {
    return Geocode.fromLatLng(lat, lng).then(
        (response: any) => response.results[0].formatted_address
    )
}

function calcDistance(from: { lat: number, lan: number }, to: { lat: number, lan: number }) {
    return google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng(from.lat, from.lan),
        new google.maps.LatLng(to.lat, to.lan)
    )
}

function calcAllCord(from: { lat: number, lan: number }) {
    let data: any = []
    tOrderTaxi().data.crews_info.forEach((laLg: any) => {
        data.push(Math.floor(calcDistance(from, {lat: laLg.lat, lan: laLg.lon})) / 1000)
    })
    return data
}

function orderTaxi(data: { crew_id: any; address: { address: any; lan: any; lat: any }[]; source_time: number }) {
    console.log(data)
}


export {
    tOrderTaxi,
    getAddressNameAS,
    calcDistance,
    calcAllCord,
    orderTaxi
}