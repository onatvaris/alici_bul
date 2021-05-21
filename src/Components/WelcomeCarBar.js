import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const WelcomeCarBar = props => {
  const {icon1Color, carIconColor} = props;
  console.log(carIconColor);
  return (
    <ScrollView style={styles.barContainer} horizontal={true}>
      <TouchableOpacity style={styles.barItems}>
        <Image
          source={require('../Assets/icons/iconAllCar.png')}
          style={{
            height: 13,
            width: 13,
            marginBottom: 6,
            tintColor: icon1Color,
          }}
        />
        <Text style={{color: icon1Color}}>Tümü</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.barItems}>
        <Image
          source={require('../Assets/icons/iconSedanCar.png')}
          style={{
            height: 18,
            width: 51,
            marginBottom: 3,
            tintColor: carIconColor,
          }}
        />
        <Text style={{color: carIconColor}}>Sedan</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.barItems}>
        <Image
          source={require('../Assets/icons/iconSuvCar.png')}
          style={{
            height: 18,
            width: 51,
            marginBottom: 3,
            tintColor: carIconColor,
          }}
        />
        <Text style={{color: carIconColor}}>Arazi & SUV</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.barItems}>
        <Image
          source={require('../Assets/icons/iconHatchbackCar.png')}
          style={{
            height: 21,
            width: 44,
            marginBottom: 3,
            tintColor: carIconColor,
          }}
        />
        <Text style={{color: carIconColor}}>Hatchback</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.barItems}>
        <Image
          source={require('../Assets/icons/iconTicariCar.png')}
          style={{
            height: 20,
            width: 40,
            marginBottom: 3,
            tintColor: carIconColor,
          }}
        />
        <Text style={{color: carIconColor}}>Ticari</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.barItems}>
        <Image
          source={require('../Assets/icons/iconTicariCar.png')}
          style={{
            height: 20,
            width: 40,
            marginBottom: 3,
            tintColor: carIconColor,
          }}
        />
        <Text style={{color: carIconColor}}>Ticari</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.barItems}>
        <Image
          source={require('../Assets/icons/iconTicariCar.png')}
          style={{
            height: 20,
            width: 40,
            marginBottom: 3,
            tintColor: carIconColor,
          }}
        />
        <Text style={{color: carIconColor}}>Ticari</Text>
      </TouchableOpacity>
    </ScrollView>
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
