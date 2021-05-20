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

const CardList = props => {
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
      <LinearGradient
        colors={['#1999CD', '#0C578B']}
        style={{width: 160, height: 137, margin: 10}}>
        <Text
          style={{
            color: 'white',
            fontWeight: '800',
            margin: 10,
            fontSize: 18,
          }}>
          Krediye Uygun{'\n'}Araçlar
        </Text>
        <Image
          source={require('../Assets/cardImages/gold.png')}
          style={{
            width: 108,
            height: 77,
            alignSelf: 'flex-end',
            top: 45,
            right: 10,
            position: 'absolute',
          }}
        />
      </LinearGradient>
    );
  };

  const CarCard = () => {
    return (
      <TouchableOpacity
        style={{
          height,
          width,
          backgroundColor: '#1E2832',
          borderRadius: 7,
          margin: 10,
        }}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={require('../Assets/cardImages/imageCar.png')}
            style={{
              height: 110,
              width: 163,
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
            <Text style={{color: 'rgba(255, 255, 255, 0.83)'}}>Audi A4</Text>
            <Text style={{color: '#1999CD'}}>
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
        justifyContent: 'center',
        marginHorizontal: 10,
        alignItems: 'center',
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

export default CardList;

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: 'orange',
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
