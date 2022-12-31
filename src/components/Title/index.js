import React,{ useState} from "react";
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import style from './styles';
const Title = () => {

  

    const [stateTitle, setTitle] = useState('')


   
// ==================================
    const onTextPress = () => {
        setTitle('New Text');
    };

// ==================================

    return (
            <Text onPress={onTextPress } style={style.title}>{stateTitle}</Text>
    );
}

// ==================================

Title.defaultProps = {
    text: 'Default Title',
}

export default  React.memo(Title);