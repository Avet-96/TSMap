import React, {Component} from 'react';
//@ts-ignore
import Autocomplete from 'react-google-autocomplete';


class Autocomp extends Component {
//@ts-ignore
    onPlaceSelected = (place) => {
        const address = place.formatted_address,
            addressArray = place.address_components,
            //@ts-ignore
            city = this.getCity(addressArray),
            //@ts-ignore
            area = this.getArea(addressArray),
            //@ts-ignore
            state = this.getState(addressArray),
            latValue = place.geometry.location.lat(),
            lngValue = place.geometry.location.lng();

        this.setState({
            address: (address) ? address : '',
            area: (area) ? area : '',
            city: (city) ? city : '',
            state: (state) ? state : '',
            markerPosition: {
                lat: latValue,
                lng: lngValue
            },
            mapPosition: {
                lat: latValue,
                lng: lngValue
            },
        })
    };

    render() {
        return (
            <Autocomplete
                style={{
                    width: '100%',
                    height: '40px',
                    paddingLeft: '16px',
                    marginTop: '2px',
                    marginBottom: '100px'
                }}
                onPlaceSelected={this.onPlaceSelected}
                types={['(regions)']}
            />
        );
    }
}

export default Autocomp
