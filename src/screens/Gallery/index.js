import React from "react";
import {  Text, SafeAreaView, FlatList, Image, TouchableOpacity, View } from 'react-native';

import styles from './styles';




const Gallery = ({navigation,route}) => {
  const {images} = route.params || {};


    return (
        <SafeAreaView style={styles.container}>
            <View>
            <FlatList style={{ paddingHorizontal: 24,marginBottom:30}} data={images} renderItem={({item})=>(
                <Image source={{uri:item}} style={styles.image} />
            )} />
                  <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.backContainer}>
                 <Image source={require("../AttractionDetails/Images/goBack.png")} style={styles.backIcon} />
                  </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default React.memo(Gallery);