/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const SearchBar = () => {
  return (
    <View
      style={{
        height: hp('5%'),
        flexDirection: 'row',
        marginTop: Platform.OS === 'ios' ? 0 : 10,
      }}>
      <View style={{flex: 0.8}}>
        <View style={styles.searchInput}>
          <Image
            source={require('../Assets/icons/iconSearch.png')}
            style={{height: 19, width: 19, marginLeft: 13}}
          />
          <TextInput
            placeholder="Arama"
            placeholderTextColor="#8694A6"
            style={{flex: 1, marginHorizontal: 10}}
          />
        </View>
      </View>
      <View
        style={{
          flex: 0.2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#1E2832',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 7,
            padding: 18,
          }}>
          <Image
            style={{height: 15, width: 18}}
            source={require('../Assets/icons/iconFilter.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: '#1E2832',
    flex: 1,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 7,
  },
});
