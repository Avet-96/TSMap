import axios from "axios";
import db from './db.json'

export function getUserIp(IP: number) {
    return axios.get(`http://www.geoplugin.net/json.gp?ip=${IP}`).then(res => res).catch(error => error)
}

export function searchCrew(source_time: string, address: []) {
    let data: any = db.descr === 'OK' ? db.data : ''
    return data
}

export function tOrderTaxi() {

}