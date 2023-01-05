import { StyleSheet,Dimensions } from "react-native";

const {width,height} = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        margin: 32,
    },
  mainImages:{
    width:"100%",
    height:height/2,
    borderRadius:20,
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"center",
  },
    header:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    icon:{
        width:24,
        height:24,
        margin:18,
    },
    footer:{
        flexDirection:"row",
        flexWrap:"wrap",
        alignItems:"center",
        justifyContent:"center", 
        borderRadius:15,
        backgroundColor:"rgba(255, 255, 255, 0.35);",
        margin:16,
        paddingHorizontal:8,
    } ,
    miniImage:{
        width:40,
        height:40,
        marginHorizontal:4,
        marginVertical:8,
        borderRadius:10,
    },
    moreImages:{
        color:"white",
        fontSize:16,
        fontWeight:"bold"
    },
    moreImagesContainer:{
        position:"absolute",
        backgroundColor:"rgba(0, 0, 0, 0.35);",
        width:40,
        height:40,
        top:8,
        left:4,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
    },
    headerContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginVertical:16,
    },
    textContainer:{

    } ,
    title:{
        fontSize:28,
        color:"#000000",
        fontWeight:"700",
    } ,
    city:{
        fontSize:20,
        fontWeight:"500",
        color:"#000000",
        marginTop:8,
    } ,
});

export default styles;