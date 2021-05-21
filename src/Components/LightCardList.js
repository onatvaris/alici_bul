/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LightCardList = props => {
  const {
    height,
    width,
    carImage,
    iconLove,
    logoCar,
    carName,
    price,
    km,
    location,
    transmission,
    iconDetail1,
    iconDetail2,
    iconDetail3,
    iconDetail4,
  } = props.data;

  console.log(height);

  const LinearCard = () => {
    return (
      <ImageBackground
        source={require('../Assets/lightCardImages/image1.png')}
        style={{
          width: 171,
          height: 137,
          marginVertical: 10,
          borderRadius: 20,}}>
        <LinearGradient
          colors={['rgba(245, 149, 60, 0.5)', 'rgba(237, 93, 47, 0.4)']}
          style={{
            flex: 1,
            position: 'relative',
            justifyContent: 'flex-end',
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 17,
              marginLeft: 10,
              marginBottom: 10,
            }}>
            Krediye Uygun{'\n'}
            <Text style={{fontWeight: 'normal'}}>Araçlar</Text>
          </Text>
        </LinearGradient>
      </ImageBackground>
    );
  };

  const CarCard = () => {
    return (
      <TouchableOpacity
        style={{
          height: 218,
          width: 171,
          backgroundColor: '#ffff',
          borderRadius: 10,
          marginVertical: 10,
        }}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={require('../Assets/cardImages/imageCar.png')}
            style={{
              flex: 1,
              borderRadius: 10,
            }}>
            <TouchableOpacity
              onPress={() => console.log('object')}
              style={{
                height: 23,
                width: 26,
                alignSelf: 'flex-end',
                margin: 7,
              }}>
              <Image
                onMagicTap={() => console.log('object')}
                source={require('../Assets/cardImages/iconLove.png')}
                style={{
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>

            <View
              style={{
                height: 36,
                width: 36,
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                top: 34,
                marginLeft: 8,
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../Assets/cardImages/logoCar.png')}
                style={{flex: 1, resizeMode: 'contain'}}
              />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.detailContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text style={{color: '#3A2D13'}}>Audi A4</Text>
            <Text style={{color: '#ED5D2F'}}>
              271.000 <Text style={{color: 'rgba(134, 148, 166, 1)'}}>₺</Text>
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../Assets/cardImages/iconDetail1.png')}
                style={{width: 15, height: 10}}
              />
              <Text style={{color: 'rgba(134, 148, 166, 1)'}}> 75.000</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../Assets/cardImages/iconDetail2.png')}
                style={{width: 10, height: 12}}
              />
              <Text style={{color: 'rgba(134, 148, 166, 1)'}}> Maltepe</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../Assets/cardImages/iconDetail3.png')}
                style={{width: 15, height: 10}}
              />
              <Text style={{color: 'rgba(134, 148, 166, 1)'}}> Otomatik</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../Assets/cardImages/iconDetail4.png')}
                style={{width: 10, height: 12}}
              />
              <Text style={{color: 'rgba(134, 148, 166, 1)'}}> Dizel</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
      }}>
      <View>
        <CarCard />
        <LinearCard />
      </View>
      <View>
        <LinearCard />
        <CarCard />
      </View>
    </View>
  );
};

export default LightCardList;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 0.55,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  detailContainer: {
    flex: 0.45,
    padding: 10,
    justifyContent: 'center',
  },
});
