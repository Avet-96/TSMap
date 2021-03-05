import React, {Component} from "react";
import {connect} from "react-redux";

import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';
// @ts-ignore
import Geocode from "react-geocode";
import {setAndGetAddressName} from "../../store/actions/orederTaxi";

Geocode.setApiKey("AIzaSyAUnnparwjmwwUj4QRy71XI3lUA0iygiZ8");
Geocode.enableDebug();


type cordinat = {

    title: string,
    name: string,
    position: { lat: number, lng: number }

}


export class GMap extends Component {
    constructor(props: {}) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {
                name: ''
            },
            initialCenter: {},
            //@ts-ignore
            markerLocation: []
        }
    }


    //@ts-ignore
    onMapClicked = (t, map, coord) => {
        const {latLng} = coord;
        const lat = latLng.lat();
        const lng = latLng.lng();
        let obj: cordinat = {
            title: '',
            name: '',
            position: {
                lat: lat,
                lng: lng,
            }
        }
        //@ts-ignore
        this.setState({markerLocation: [obj],})

        this.getAddressName(`${lat}`, `${lng}`)
    };

    // @ts-ignore
    onMarkerClick = (props, marker, e) => {
        const lat = marker.position.lat();
        const lng = marker.position.lng();
        let index = null
        // @ts-ignore
        let data = this.state.markerLocation.forEach((val: any, ind: number, a: []) => {
            if (val.position.lat === lat && val.position.lng === lng) {
                index = ind
            }
        })
        // @ts-ignore
        this.state.markerLocation.splice(index, 1)
        this.setState({
            data
        })

    }
    getAddressName = (lat: string, lng: string) => {
        Geocode.fromLatLng(lat, lng).then(
            (response: any) => {
                const address = response.results[0].formatted_address;
                // @ts-ignore
                this.props.setAndGetAddressName(address)
            },
            (error: any) => {
                console.error(error);
            }
        );
    }


    render() {
        // @ts-ignore

        return (

            <Map
                //@ts-ignore
                google={this.props.google} zoom={14}
                //@ts-ignore
                onClick={this.onMapClicked}
            >
                {//@ts-ignore
                    this.state.markerLocation.map((v: any) => {
                        return (<Marker
                            //@ts-ignore
                            title={v.title}
                            name={v.name}
                            position={v.position}
                            onClick={this.onMarkerClick}
                        />)
                    })
                }


                <div>
                    <h1>
                        {// @ts-ignore
                            this.state.selectedPlace.name}
                    </h1>
                </div>
            </Map>

        );
    }
}

const mapStateToProps = (state: {}) => ({});

const mapDispatchToProps = {
    setAndGetAddressName
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(GMap);

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAUnnparwjmwwUj4QRy71XI3lUA0iygiZ8')
    // @ts-ignore
})(Container)