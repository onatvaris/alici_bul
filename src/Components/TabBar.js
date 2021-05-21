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
import {connect} from 'react-redux';
import {backgroundChanged, iconColorChanged} from '../Actions';

const MyTabBar = ({
  state,
  descriptors,
  navigation,
  backgroundChanged,
  selected,
  iconColor,
  iconColorChanged,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: Platform.OS === 'ios' ? hp('11%') : hp('9%'),
        backgroundColor: selected,
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
            if (isFocused) {
              backgroundChanged('#0E151F');
              iconColorChanged('#D6D7D9');
            }
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                  padding: 6,
                }}>
                <Image
                  source={require('../Assets/icons/iconVitrin.png')}
                  style={{tintColor: iconColor}}
                />
                {isFocused ? (
                  <Text
                    style={{
                      color: '#ffff',
                    }}>
                    {label}
                  </Text>
                ) : null}
              </View>
            );
          }
          if (label === 'Chat') {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                  padding: 7,
                }}>
                <Image
                  source={require('../Assets/icons/iconChat.png')}
                  style={{tintColor: iconColor}}
                />
                {isFocused ? (
                  <Text
                    style={{
                      color: '#ffff',
                    }}>
                    Mesajlar
                  </Text>
                ) : null}
              </View>
            );
          }
          if (label === 'UserCar') {
            if (isFocused) {
              backgroundChanged('#F3F0EA');
              iconColorChanged('#9D9686');
            }
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                  padding: 7,
                }}>
                <Image
                  source={require('../Assets/icons/iconUserCar.png')}
                  style={{tintColor: iconColor}}
                />
                {isFocused ? (
                  <Text
                    style={{
                      color: '#ffff',
                      paddingLeft: isFocused ? 6 : 0,
                    }}>
                    AlıcıOl
                  </Text>
                ) : null}
              </View>
            );
          }
          if (label === 'Camera') {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                  padding: 7,
                }}>
                {isFocused ? (
                  <View
                    style={{
                      position: 'absolute',
                      backgroundColor: '#5d5e62',
                      height: 45,
                      width: 170,
                      bottom: 63,
                      borderRadius: 20,
                    }}></View>
                ) : null}
                <Image
                  source={require('../Assets/icons/iconCamera.png')}
                  style={{tintColor: iconColor}}
                />
                {isFocused ? (
                  <Text
                    style={{
                      color: '#ffff',
                      paddingLeft: isFocused ? 6 : 0,
                    }}>
                    AlıcıOl
                  </Text>
                ) : null}
              </View>
            );
          }
          if (label === 'Profil') {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                  padding: 7,
                }}>
                <Image
                  source={require('../Assets/icons/iconProfile.png')}
                  style={{tintColor: iconColorChanged}}
                />
                {isFocused ? (
                  <Text
                    style={{
                      color: '#ffff',
                      paddingLeft: isFocused ? 6 : 0,
                    }}>
                    Profil
                  </Text>
                ) : null}
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

const mapStateToProps = ({backgroundResponse}) => {
  const {selected, iconColor} = backgroundResponse;
  return {
    selected,
    iconColor,
  };
};

export default connect(mapStateToProps, {
  backgroundChanged,
  iconColorChanged,
})(MyTabBar);

const styles = StyleSheet.create({});
