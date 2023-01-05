import React from "react";
import { Text, SafeAreaView, ImageBackground, View, Pressable, Image } from 'react-native';
import InfoCard from "../../components/InfoCard";
import styles from './styles';



const AttractionDetails = ({ navigation, route }) => {
  const { item } = route.params || {};
  const mainImage = item.images.length ? item.images[0] : null;
  const slicedImages = item.images.length ? item.images.slice(0, 5) : [];
  const diffImages = item.images.length - slicedImages.length;


  const onGalleryNavigate = () => {
    navigation.navigate("Gallery", { images: item.images });
  }

  return (
    <SafeAreaView style={styles.container} >
      <ImageBackground source={{ uri: mainImage }} imageStyle={{ borderRadius: 20 }} style={styles.mainImages}>

        <View style={styles.header} >
          <Pressable onPress={() => navigation.goBack()} hitSlop={8}>
            <Image source={require("./Images/goBack.png")} style={styles.icon} />
          </Pressable>
          <Pressable onPress={() => navigation.goBack()} hitSlop={8}>
            <Image source={require("./Images/share.png")} style={styles.icon} />
          </Pressable>
        </View>

        <Pressable onPress={onGalleryNavigate} style={styles.footer}>
          {slicedImages?.map((image, index) => (
            <View>
              <Image key={image} source={{ uri: image }} style={styles.miniImage} />
              {diffImages > 0 && index === slicedImages.length - 1 ? (
                <View style={styles.moreImagesContainer}>
                  <Text style={styles.moreImages}>{`+${diffImages}`}</Text>
                </View>
              ) : null}
            </View>

          ))}
        </Pressable>

      </ImageBackground>

      <View style={styles.headerContainer}>
        <View style={styles.textContainer}>

          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.city}>{item.city}</Text>

        </View>

        <Text style={styles.title}>{item.entry_price}</Text>

      </View>

      <InfoCard text={item.address} icon={require("./Images/location-circle.png")} />
      <InfoCard text={`Open 
${item.opening_time}-${item.closing_time}`}
        icon={require("./Images/time.png")} />

    </SafeAreaView>
  );
}

export default React.memo(AttractionDetails);