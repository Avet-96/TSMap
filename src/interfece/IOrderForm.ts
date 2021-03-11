
export default interface IOrderForm {
    getAddressName: (name: string) => void,
    moutonMarkInLatLng: (lat: number, lan: number) => void,
    addAllTaxi: () => void,
    taxiDist: (data: [any]) => void,
    addressDb?: any,
    isOpen?: boolean,
    valueName?: string,
    name?: string

}
export interface IState{
    addressDb?:any,
    isOpen?:boolean,
    valueName?:string,
}
