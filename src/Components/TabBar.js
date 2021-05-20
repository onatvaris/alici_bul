/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {color} from 'react-native-reanimated';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const MyTabBar = ({state, descriptors, navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: Platform.OS === 'ios' ? hp('11%') : hp('9%'),
        backgroundColor: '#0E151F',
        paddingHorizontal: 20,
        justifyContent: 'center',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const tabIcon = () => {
          if (label === 'Vitrin') {
            return (
              <View style={{flexDirection: 'row'}}>
                <Image source={require('../Assets/icons/iconVitrin.png')} />
                <Text
                  style={{
                    color: '#ffff',
                    paddingLeft: label === 'Vitrin' ? 6 : 0,
                  }}>
                  {label}
                </Text>
              </View>
            );
          }
          if (label === 'Chat') {
            return (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../Assets/icons/iconChat.png')} />
              </View>
            );
          }
          if (label === 'UserCar') {
            return (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../Assets/icons/iconUserCar.png')} />
              </View>
            );
          }
          if (label === 'Camera') {
            return (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../Assets/icons/iconCamera.png')} />
              </View>
            );
          }
          if (label === 'Profil') {
            return (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../Assets/icons/iconProfile.png')} />
              </View>
            );
          }

          return null;
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 6,
                backgroundColor: isFocused ? '#1999CD' : null,
                borderRadius: 6,
              }}>
              {tabIcon()}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MyTabBar;

const styles = StyleSheet.create({});
