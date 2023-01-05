import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const Categories = ({ categories,selectedCategory,onCategoryPress}) => {
    return (

        <FlatList 
            horizontal
            data={categories}
            showsHorizontalScrollIndicator={false}
            renderItem = {({ item}) =>{
               const selected = selectedCategory === item;
                return  (
                        <TouchableOpacity onPress={() => onCategoryPress(item)}  style={[styles.itemsContainer,selected  ? styles.selectedItemsContainer:{}]}>
                               <Text style={[styles.items,selected  ? styles.selectedItem:{}]}>{item}</Text>
                        </TouchableOpacity>
                     
                    )
            }} />

    );
}


export default React.memo(Categories);