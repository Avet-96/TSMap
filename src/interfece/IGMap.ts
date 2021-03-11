export default interface IRecipeProps {
    latLing: (lat: number, lng: number) => any
    addAllTaxi: () => void
    getAddressName: (address: any) => void,
    title?: string,
    name?: string,
    position?: { lat: number, lng: number }
    markerLocation?: any,
    getAddressNameAS: () => string,
    moutonMarkInLatLng: (lal: number, lan: number) => void
    taxiDist: (data: [number]) => any
    clearData: () => void,
    taxis?: any
    latLng?: any,
    google?: any,
}

export interface IState {
    markerLocation?: any
}
