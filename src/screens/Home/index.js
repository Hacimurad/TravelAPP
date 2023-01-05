import React, { useEffect } from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView, FlatList, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AttractionCard from "../../components/AttractionCard";
import Categories from "../../components/Categories";
import Title from '../../components/Title';
import styles from './styles';
import jsonData from '../../data/attractions.json';
import categories from '../../data/categories.json';

const All="All"

const Home = () => {
    const navigation = useNavigation();
    const [selectedCategory, setSelectedCategory] = React.useState(All);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        setData(jsonData);
    }, []);

    useEffect(() => {
        if (selectedCategory === All) {
            setData(jsonData);
        } else {
            const filteredData = jsonData.filter((item) => item.categories.includes(selectedCategory));
            setData(filteredData);
        }
    }, [selectedCategory]);

    return (
        <SafeAreaView style={styles.container}>
                <FlatList
                    data={data}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    style={{flexGrow: 1}}
                   ListEmptyComponent={(<Text style={{textAlign: "center", marginTop: 32}}>No data found</Text>)}
                    ListHeaderComponent={(
                        <>
                            <Title text="Where do" style={{ fontWeight: "normal" }} />
                            <Title text="you want to go" />

                            <Title text="Explore Attractions" style={styles.subtitle} />
                            <Categories
                                selectedCategory={selectedCategory}
                                onCategoryPress={setSelectedCategory}
                                categories={[All,...categories ]} />
                        </>
                    )}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item, index }) => (
                        <AttractionCard
                            key={item.id}
                            style={index % 2 === 0 ? { marginRight: 8 } : {}}
                            onPress={() => navigation.navigate("AttractionDetails",{item})}
                            title={item.name}
                            subtitle={item.city}
                            imageSrc={item.images?.length ? item.images[0] : null}
                        />
                    )}
                />
        </SafeAreaView>
    );
}

export default React.memo(Home);