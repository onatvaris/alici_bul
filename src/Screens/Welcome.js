/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CardList from '../Components/CardList';
import SearchBar from '../Components/SearchBar';
import WelcomeCarBar from '../Components/WelcomeCarBar';
import DATA from '../Data/cardData.json';
const Welcome = () => {
  const renderItem = ({item}) => {
    console.log(item);
    return (
      <View style={{}}>
        <CardList data={item} style={{aspectRatio: 1, flex: 1 / 2}} />
      </View>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: '#0E151F', flex: 1}}>
      {/* 5% */}
      <SearchBar />
      <View style={styles.contentContainer}>
        <WelcomeCarBar />
        <View
          style={{
            height: hp('27%'),
            width: wp('100%'),
            justifyContent: 'center',
          }}>
          <Image
            style={{
              resizeMode: 'contain',
              height: hp('30%'),
              width: wp('100%'),
              position: 'absolute',
            }}
            source={require('../Assets/imageCar.png')}
          />
          <View
            style={{
              width: wp('30%'),
              marginLeft: 30,
            }}>
            <Text style={{color: 'white'}}>
              Stüdyo özelliği ile
              {'\n'}
              <Text style={{fontWeight: '700', color: 'white', fontSize: 18}}>
                aracınızı{'\n'}en iyi şekilde{'\n'}sergileyin
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
            style={{flex: 1}}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  contentContainer: {
    height: Platform.OS === 'ios' ? hp('79%') : hp('82%'),
  },
  barContainer: {
    flexDirection: 'row',
    marginTop: 10,
    width: wp('94%'),
    alignSelf: 'center',
  },
  barItems: {justifyContent: 'flex-end', alignItems: 'center', padding: 10},
});
