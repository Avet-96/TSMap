import React, {Component} from "react";
import {connect} from "react-redux";
import {Circle, GoogleApiWrapper, Map, Marker} from 'google-maps-react';
import {calcAllCord, getAddressNameAS} from '../../api/Api'
import {addAllTaxi, clearData, getAddressName, moutonMarkInLatLng, taxiDist} from "../../store/actions/orederTaxi";

let isOnInRadius = true

interface IRecipeProps {
    latLing: (lat: number, lng: number) => any
    addAllTaxi: () => void
    getAddressName: (address: any) => void,
    title: string,
    name: string,
    position: { lat: number, lng: number }
    markerLocation: any,
    getAddressNameAS: () => string,
    moutonMarkInLatLng: (lal: number, lan: number) => void
    taxiDist: (data: [number]) => any
    clearData: () => void,
    taxis: any
    latLng: any,
    google: any,

}


export class GMap extends Component<IRecipeProps> {
    constructor(props: any) {
        super(props)
        this.state = {
            markerLocation: [],
        }
    }

    onMapClicked = async (t: any, map: any, coord: any) => {
        const {latLng} = coord;
        const lat = latLng.lat();
        const lng = latLng.lng();
        let obj = {
            title: 'Anna',
            name: '',
            position: {
                lat: lat,
                lng: lng,
            }
        }
        this.setState({markerLocation: obj})
        let name = await getAddressNameAS(`${lat}`, `${lng}`)
        this.props.taxiDist(calcAllCord({lat, lan: lng}))
        this.props.getAddressName(name)
        this.props.addAllTaxi()
        this.props.moutonMarkInLatLng(0, 0)
        if (isOnInRadius) {
            this.props.clearData()
        }
    };

    isMousOut = (ev: string = 'out') => isOnInRadius = ev === 'out'


    render() {
        // @ts-ignore
        const {markerLocation} = this.state
        const {taxis, latLng} = this.props;

        return <Map
            google={this.props.google} zoom={14}
            onClick={this.onMapClicked}
            initialCenter={{lat: 40.177200, lng: 44.503490}}
            style={{width: 500, height: 500, position: 'relative'}}
        >

            <Marker
                title={markerLocation.title}
                // @ts-ignore
                name={markerLocation.name}
                position={latLng.lat !== 0 && latLng.lng !== 0 ? latLng : markerLocation.position}
            />
            {taxis.length ? taxis.map((taxi: any) => <Marker
                    key={taxi.crew_id}
                    title={taxi.car_model}
                    // @ts-ignore
                    name={taxi.driver_name}
                    position={{lat: taxi.lat, lng: taxi.lon}}
                />
            ) : ''}
            <Circle
                radius={1200}
                center={{lat: 40.177200, lng: 44.503490}}
                onClick={this.onMapClicked}
                onMouseout={() => this.isMousOut('out')}
                onMouseover={() => this.isMousOut('over')}
                strokeColor='transparent'
                strokeOpacity={0}
                strokeWeight={5}
                fillOpacity={0.2}
            />
        </Map>
    }
}

const mapStateToProps = (state: { orderTaxi: { taxis: any, latLng: any } }) => ({
    taxis: state.orderTaxi.taxis,
    latLng: state.orderTaxi.latLng,

});

const mapDispatchToProps = {
    addAllTaxi,
    getAddressName,
    moutonMarkInLatLng,
    taxiDist,
    clearData,
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
    //@ts-ignore
)(GMap);

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAUnnparwjmwwUj4QRy71XI3lUA0iygiZ8')
    // @ts-ignore
})(Container)
