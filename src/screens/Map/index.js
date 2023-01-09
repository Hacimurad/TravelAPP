import React from "react";
import styles from './styles';
import { View,Text,Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';



const Map = ({ navigation, route }) => {

    const { item } = route.params || {};
    const coord ={
        latitude: item?.coordinates?.lat,
        longitude: item?.coordinates?.lon,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009,
      };
    


    return (
        <View style={styles.container}>
            <MapView style={styles.map} initialRegion={coord} >
                <Marker coordinate={coord} title={item?.name} />
            </MapView>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image source={require("../AttractionDetails/Images/goBack.png")} style={styles.icon} />
                </TouchableOpacity>
              
            <Text  style={styles.title} >{` ${item.name},${item.city}`}</Text>
            </View>
        </View>
    );
}

export default React.memo(Map);