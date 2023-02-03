
import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import MapView, { Circle, Heatmap, Marker, Polyline, Geojson, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { decode } from "@mapbox/polyline";
import Geolocation from '@react-native-community/geolocation';


const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});



const Location = () => {

    const [currentLatitude, setCurrentLatitude] = useState('')
    const [currentLongitude, setCurrentLongitude] = useState('')

    useEffect(() => {
        Geolocation.getCurrentPosition(info => {
            // console.log(info)
            console.log(info.coords.latitude)
            console.log(info.coords.longitude)
            setCurrentLatitude(info.coords.latitude)
            setCurrentLongitude(info.coords.longitude)
        });

    })
    return (
        <View style={styles.container} >
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                <Marker
                    title='ABC'
                    description='ABC Location'
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                />


                <Polyline
                    coordinates={[
                        { latitude: 37.78825, longitude: -122.4324 },
                        { latitude: 37.8025259, longitude: -122.4351431 },
                    ]}
                    strokeColor="#00B0FF" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeWidth={6}
                />

                {/* <Circle
            center={
                { latitude: 37.78825, longitude: -122.4324 }
            }
            radius={500}
            strokeWidth={1}
            strokeColor={'#00B0FF'}
            fillColor="transparent"
        /> */}

                {/* <Heatmap
            points={[
                { latitude: 37.78825, longitude: -122.4324, weight: 1 },
            ]}
            radius={40}
            opacity={1}
        /> */}

            </MapView>
        </ View >
    )
}

export default Location






// const getDirections = async (startLoc, destinationLoc) => {
//     try {
//       const KEY = "AIzaSyAokbojbqiiIkHdsdV05KpOctrrmwalheE"; //put your API key here.
//       //otherwise, you'll have an 'unauthorized' error.
//       let resp = await fetch(
//         `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=${KEY}`
//       );
//       let respJson = await resp.json();
//       let points = decode(respJson.routes[0].overview_polyline.points);
//       console.log(points);
//       let coords = points.map((point, index) => {
//         return {
//           latitude: point[0],
//           longitude: point[1]
//         };
//       });
//       return coords;
//     } catch (error) {
//       return error;
//     }
//   };
// export default Location = () => {
//     const [coords, setCoords] = useState([]);

//     useEffect(() => {
//         //fetch the coordinates and then store its value into the coords Hook.
//         getDirections("52.5200066,13.404954", "50.1109221,8.6821267")
//             .then(coords => setCoords(coords))
//             .catch(err => console.log("Something went wrong"));
//     }, []);
//     return <>

//         <MapView
//             style={{ flex: 1 }}
//             initialRegion={{
//                 latitude: 52.5200066,
//                 longitude: 13.404954,
//                 latitudeDelta: 0.1,
//                 longitudeDelta: 0.1
//             }}
//         >
//             {/* finally, render the Polyline component with the coords data */}
//             {coords.length > 0 && <Polyline coordinates={coords} />}
//         </MapView>
//     </>
// } 