import React from "react";
import { Text,View,Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";


const AttractionCard = ({imageSrc,title,subtitle,style,onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.card,style]}>
            <Image style={styles.image} source={{uri: imageSrc}}/>
            <Text style={styles.title}>{title}</Text>
            <View  style={styles.row}>
                    <Image 
                     style={styles.locationIcon} 
                     source={require("./Image/location.png")}
                     />
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
          
        </TouchableOpacity>
    );
}


export default React.memo(AttractionCard);