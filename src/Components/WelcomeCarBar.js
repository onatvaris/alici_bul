import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const WelcomeCarBar = () => {
  return (
    <View style={styles.barContainer}>
      <TouchableOpacity style={styles.barItems}>
        <Image
          source={require('../Assets/icons/iconAllCar.png')}
          style={{height: 13, width: 13, marginBottom: 3}}
        />
        <Text style={{color: '#1999CD'}}>Tümü</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.barItems}>
        <Image
          source={require('../Assets/icons/iconSedanCar.png')}
          style={{height: 18, width: 51, marginBottom: 3}}
        />
        <Text style={{color: 'rgba(255, 255, 255, 0.83)'}}>Sedan</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.barItems}>
        <Image
          source={require('../Assets/icons/iconSuvCar.png')}
          style={{height: 18, width: 51, marginBottom: 3}}
        />
        <Text style={{color: 'rgba(255, 255, 255, 0.83)'}}>Arazi & SUV</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.barItems}>
        <Image
          source={require('../Assets/icons/iconHatchbackCar.png')}
          style={{height: 21, width: 44, marginBottom: 3}}
        />
        <Text style={{color: 'rgba(255, 255, 255, 0.83)'}}>Hatchback</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.barItems}>
        <Image
          source={require('../Assets/icons/iconTicariCar.png')}
          style={{height: 20, width: 40, marginBottom: 3}}
        />
        <Text style={{color: 'rgba(255, 255, 255, 0.83)'}}>Ticari</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeCarBar;

const styles = StyleSheet.create({
  barContainer: {
    flexDirection: 'row',
    marginTop: 10,
    width: wp('94%'),
    alignSelf: 'center',
  },
  barItems: {justifyContent: 'flex-end', alignItems: 'center', padding: 10},
});
