import React, {Component} from "react";
import {connect} from "react-redux";
import {Circle, GoogleApiWrapper, Map, Marker} from 'google-maps-react';
import {calcAllCord, getAddressNameAS} from '../../api/Api'
import {addAllTaxi, clearData, getAddressName, moutonMarkInLatLng, taxiDist} from "../../store/actions/orederTaxi";
import IRecipeProps, {IState} from '../../interfece/IGMap'
import {API_KEY} from "../../api/config";

let isOnInRadius = true

export class GMap extends Component<IRecipeProps, IState> {
    constructor(props: any) {
        super(props)
        this.state = {
            markerLocation: {},
        }
    }

    onMapClicked = async (t: any, map: any, coord: any) => {
        const {latLng} = coord, lat = latLng.lat(), lng = latLng.lng();
        let obj = {
            title: 'Anna',
            name: '',
            position: {
                lat: lat,
                lng: lng,
            }
        }
        let name = await getAddressNameAS(`${lat}`, `${lng}`)
        this.changeDataFunc(obj, lat, lng, name)

    };

    changeDataFunc = (obj: any, lat: number, lng: number, name: string) => {
        const {taxiDist, getAddressName, addAllTaxi, moutonMarkInLatLng} = this.props

        this.setState({markerLocation: obj})
        taxiDist(calcAllCord({lat, lan: lng}))
        getAddressName(name)
        addAllTaxi()
        moutonMarkInLatLng(0, 0)

        if (isOnInRadius) {
            this.props.clearData()
        }
    }

    isMouseOut = (ev: string = 'out') => isOnInRadius = ev === 'out'


    render() {
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
                position={latLng.lat !== 0 && latLng.lng !== 0 ? latLng : markerLocation.position}
            />
            {taxis.length ? taxis.map((taxi: any) => <Marker
                    key={taxi.crew_id}
                    title={taxi.car_model}
                    position={{lat: taxi.lat, lng: taxi.lon}}
                />
            ) : ''}
            <Circle
                radius={1200}
                center={{lat: 40.177200, lng: 44.503490}}
                onClick={this.onMapClicked}
                onMouseout={() => this.isMouseOut('out')}
                onMouseover={() => this.isMouseOut('over')}
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
    // @ts-ignore
)(GMap);

export default GoogleApiWrapper({
    apiKey: (API_KEY)
    // @ts-ignore
})(Container)
