import { StyleSheet,Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: "100%",
        height: "100%",
    },
    back: {
      width: 15,
      height: 15,
        color: "black",
        marginRight: 16,
    },
    header: {
        position: "absolute",
        top: 30,
        backgroundColor: "white",
        borderRadius: 10,
        flex: 1,
        padding: 10,
        margin: 12,
        flexDirection: "row",
        width: width - 44,
        alignItems: "center",
       
    },
    title: {    
        fontSize: 20,
        color: "black",
        fontWeight: "500",
    },
});

export default styles;