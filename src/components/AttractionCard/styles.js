import { StyleSheet,Dimensions } from 'react-native'

const  {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    card:{
      
        padding: 5,
        borderWidth: 1,
        borderColor: "#E2E2E2",
        borderRadius: 15,
        marginBottom: 12,
    },
    image:{
        width:(width - 96) / 2,
        borderRadius: 15,
        height: 120,
    },
    title:{
        fontSize: 12,
        color: "#000000",
        fontWeight: "500",
        marginTop: 12,
        marginLeft: 6,

    },
    subtitle:{
        fontSize: 10,
        fontWeight: "300",
        color: "rgba(0, 0, 0, 0.5)",
        
    },
    row:{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
        marginLeft: 6,
        marginBottom: 12,
    },
    locationIcon:{
        width: 10,
        height: 10,
        marginRight: 6,
    }
})
export default styles

// font-family: 'Inter';
// font-style: normal;
// font-weight: 600;
// font-size: 12px;
// line-height: 15px;
// display: flex;
// align-items: center;

// color: #000000;
