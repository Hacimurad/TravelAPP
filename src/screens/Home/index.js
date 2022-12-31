import React from "react";
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
} from 'react-native';
import Title from '../../components/Title';
import TitleClass from "../../components/Title/classComponent";

const Home = () => {
    const [state, setState] = React.useState('My first Component')

    React.useEffect(() => {
        setTimeout(() => {
            setState('New Text')
        }, 3000)
    }, [])
    console.log('Home Mounted==', state);
    
    return (
        <SafeAreaView>
            <View>
                <Title  />
              
                <TitleClass />
            </View>
        </SafeAreaView>

    );
}

export default React.memo(Home) ;