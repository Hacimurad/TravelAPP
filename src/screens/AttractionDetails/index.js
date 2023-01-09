import React from "react";
import { Text, SafeAreaView, ImageBackground, View, Pressable, Image, ScrollView } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Share from 'react-native-share';
import ImgToBase64 from 'react-native-image-base64'
import InfoCard from "../../components/InfoCard";
import styles from './styles';



const AttractionDetails = ({ navigation, route }) => {
  const { item } = route.params || {};
  const mainImage = item.images.length ? item.images[0] : null;
  const slicedImages = item.images.length ? item.images.slice(0, 5) : [];
  const diffImages = item.images.length - slicedImages.length;
  const coord ={
    latitude: item?.coordinates?.lat,
    longitude: item?.coordinates?.lon,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009,
  };

  const onGalleryNavigate = () => {
    navigation.navigate("Gallery", { images: item.images });
  }

  const onShare = async() => {
    try{
      const imageWithoutParams = mainImage?.split('?')[0];
      const imagePart = imageWithoutParams?.split('.');
      const imageExtension = imagePart[imagePart.length - 1];
      const base64Image = await ImgToBase64.getBase64String(mainImage)
       console.log("MainImages===",mainImage)
       Share.open({
         title: item.name,
         message: "Hey I want to share",
         url:`data:image/${imageExtension || 'jpg'};base64,${base64Image}`
        })
            .then((res) => {
            console.log(res);
          })
           .catch((err) => {
             err && console.log(err);
           });
        }catch(e){
      console.log("sharing eror",e)
    }
  };

  return (
    <SafeAreaView style={styles.container} >
      <ScrollView key={item.id} showsVerticalScrollIndicator={false}>
        <ImageBackground source={{ uri: mainImage }} imageStyle={{ borderRadius: 20 }} style={styles.mainImages}>


          <View style={styles.header} >
            <Pressable onPress={() => navigation.goBack()} hitSlop={8}>
              <Image source={require("./Images/goBack.png")} style={styles.icon} />
            </Pressable>
            <Pressable onPress={onShare} hitSlop={8}>
              <Image source={require("./Images/share.png")} style={styles.icon} />
            </Pressable>
          </View>

          <Pressable onPress={onGalleryNavigate} style={styles.footer}>
            {slicedImages?.map((image, index) => (
              <View>
                <Image key={index.id}  source={{ uri: image }} style={styles.miniImage} />
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
        <View style={{marginBottom:15}}>
        <InfoCard text={item.address} icon={require("./Images/location-circle.png")} />
        <InfoCard  text={`Open 
${item.opening_time}-${item.closing_time}`}
          icon={require("./Images/time.png")} />

        </View>


          <View style={{borderRadius: 10,overflow:"hidden"}}>

            <MapView style={styles.map} initialRegion={coord} >
              <Marker coordinate={coord} title={item?.name}  />
            </MapView>
            
            <Text style={styles.mapText}  onPress={()=>navigation.navigate('Map',{item})}>Show Full Screen App</Text>
           
          </View>
       
      </ScrollView>
    </SafeAreaView>
  );
}

export default React.memo(AttractionDetails);