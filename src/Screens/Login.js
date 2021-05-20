/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
  ScrollView,
  Keyboard,
  Modal,
} from 'react-native';
import {emailChanged} from '../Actions';
import {connect} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LoginModal from '../Components/LoginModal';
import FooterText from '../Components/FooterText';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const {height, width} = Dimensions.get('window');

const Login = props => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const _keyboardDidShow = () => setKeyboardStatus(true);
  const _keyboardDidHide = () => setKeyboardStatus(false);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#262626'}}
      scrollEnabled={keyboardStatus}>
      <LoginModal />
      <ImageBackground
        source={require('../Assets/backgroundImage.png')}
        style={{flex: 1}}>
        <View style={styles.imageContainer}>
          <Image source={require('../Assets/logo.png')} />
          <Text style={{fontSize: 14, color: '#FFFFFF'}}>
            Hazır alıcılar, mutlu satıcılar
          </Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.inputContainer}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '700',
                marginBottom: 10,
                color: '#ffff',
              }}>
              Üye Girişi
            </Text>
            <TextInput
              placeholder="Eposta veya Cep Telefonu"
              placeholderTextColor="#cccc"
              style={styles.input}
              onChangeText={text => props.emailChanged(text)}
              onSubmitEditing={Keyboard.dismiss}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => console.log('object')}>
              <Text style={{color: 'white', fontSize: 16}}>Oturum Aç</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.socialButtonContainer}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.line} />
              <Text
                style={{paddingHorizontal: 25, color: 'white', fontSize: 16}}>
                veya
              </Text>
              <View style={styles.line} />
            </View>
            <View
              style={{
                marginTop: 15,
                flexDirection: 'row',
              }}>
              <TouchableOpacity style={styles.socialButton}>
                <Image
                  source={require('../Assets/logoApple.png')}
                  style={{height: 20, width: 16}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Image
                  source={require('../Assets/logoGoogle.png')}
                  style={{height: 15, width: 15}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Image
                  source={require('../Assets/logoFacebook.png')}
                  style={{height: 20, width: 10}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                alignSelf: 'center',
                marginVertical: 20,
              }}
              onPress={() => props.navigation.navigate('Register')}>
              Yeni Hesap Oluşturun
            </Text>
            <FooterText />
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: hp('40%'),
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'visible',
  },
  contentContainer: {
    height: hp('60%'),
  },
  inputContainer: {
    flex: 0.35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialButtonContainer: {
    flex: 0.2,
    alignItems: 'center',
  },
  textContainer: {
    flex: 0.53,
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    height: 40,
    width: wp('85%'),
    paddingLeft: 13,
    borderRadius: 6,
    fontSize: 14,
    color: '#ffff',
  },
  button: {
    height: 40,
    width: wp('85%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1999CD',
    marginVertical: 10,
  },
  line: {
    width: (width * 32) / 100,
    borderWidth: 1,
    height: 0,
    alignSelf: 'center',
    borderColor: '#828894',
  },
  socialButton: {
    borderWidth: 1,
    height: 33,
    width: 33,
    borderRadius: 18,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 7,
  },
});

const mapStateToProps = ({loginResponse}) => {
  const {email} = loginResponse;
  return {
    email,
  };
};

export default connect(mapStateToProps, {
  emailChanged,
})(Login);
