/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {statuChanged} from '../Actions';

const {height, width} = Dimensions.get('window');

function LoginModal(props) {
  const [Visible, setVisible] = useState(true);
  const setStatu = statu => {
    props.statuChanged(statu);
    setVisible(false);
  };
  useEffect(() => {
    console.log(Visible);
  }, [Visible]);

  return (
    <Modal visible={Visible} transparent={true}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(100,100,100, 0.5)',
        }}>
        <View
          style={{
            backgroundColor: '#262626',
            width: wp('60%'),
            height: hp('37%'),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 23,
          }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setStatu('bireysel')}>
            <Image
              style={{height: 45, width: 19, marginLeft: wp('7%')}}
              source={require('../Assets/icons/iconBireysel.png')}
            />
            <Text
              style={[
                styles.text,
                {
                  marginLeft: wp('9%'),
                },
              ]}>
              Bireysel
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', marginVertical: 7}}>
            <View style={styles.line} />
            <Text style={{paddingHorizontal: 25, color: 'white', fontSize: 16}}>
              veya
            </Text>
            <View style={styles.line} />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setStatu('kurumsal')}>
            <Image
              style={{height: 38, width: 38, marginLeft: wp('5%')}}
              source={require('../Assets/icons/iconKurumsal.png')}
            />
            <Text
              style={[
                styles.text,
                {
                  marginLeft: wp('6%'),
                },
              ]}>
              Kurumsal
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  line: {
    borderWidth: 1,
    height: 0,
    alignSelf: 'center',
    borderColor: '#828894',
    width: wp('16%'),
  },
  text: {
    color: '#1999CD',
    fontSize: 17,
    fontWeight: '700',
  },
  button: {
    backgroundColor: '#1F1F1F',
    flexDirection: 'row',
    alignItems: 'center',
    height: hp('13%'),
    width: wp('50%'),
  },
});

const mapStateToProps = ({loginResponse}) => {
  const {statu} = loginResponse;
  return {
    statu,
  };
};

export default connect(mapStateToProps, {
  statuChanged,
})(LoginModal);
