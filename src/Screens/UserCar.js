/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import SearchBar from '../Components/SearchBar';
import WelcomeCarBar from '../Components/WelcomeCarBar';
import DATA from '../Data/cardData.json';
import LightCardList from '../Components/LightCardList';
const UserCar = () => {
  const renderItem = ({item}) => {
    console.log(item);
    return <LightCardList data={item} />;
  };
  return (
    <View style={{backgroundColor: '#F5F2EC', flex: 1}}>
      <SearchBar
        searchBackground={'#FFFEFD'}
        searchIconTintColor={'#3A2D13'}
        searchFilterBackground={'#E2D9C5'}
      />
      <ScrollView style={styles.contentContainer}>
        <WelcomeCarBar icon1Color={'#ED5D2F'} carIconColor={'#9D9686'} />
        <View
          style={{
            height: hp('20%'),
            width: wp('92%'),
            flexDirection: 'row',
            marginTop: 10,
            marginBottom: 5,
            backgroundColor: 'white',
            alignSelf: 'center',
            // shadowColor: 'rgba(99, 99, 99, 0.31)',

            // elevation: 24,

            // borderWidth: 0,
          }}>
          <Image
            style={{
              resizeMode: 'cover',
              height: hp('14%'),
              width: wp('67%'),
              position: 'absolute',
              alignSelf: 'flex-end',
              left: 55,
            }}
            source={require('../Assets/lightCardImages/carImage.gif')}
          />
          <View
            style={{
              backgroundColor: '#E5DECE',
              zIndex: -1,
              width: wp('57%'),
            }}>
            <Text style={{color: '#3A2D13'}}>
              Stüdyo özelliği ile
              {'\n'}
              <Text style={{fontWeight: '700', color: '#3A2D13', fontSize: 18}}>
                aracınızı en iyi şekilde{'\n'}sergileyin
              </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default UserCar;

const styles = StyleSheet.create({
  contentContainer: {
    height: Platform.OS === 'ios' ? hp('79%') : hp('82%'),
  },
});
