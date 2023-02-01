
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MapView, { Circle, Heatmap, Marker, Polyline, Geojson, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

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



export default Location = () => (
    <View style={styles.container}>
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
    </View>
);