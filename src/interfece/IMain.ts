export default interface IMain {
    orderTaxi: (data: {
        source_time: number, address: [{
            address: string,
            lat: string,
            lan: string
        }], crew_id: number
    }) => void
}