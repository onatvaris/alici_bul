/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

const TextContent = props => {
  return <Text style={{color: props.color}}>{props.text}</Text>;
};
const FooterText = props => {
  return (
    <View
      style={{
        width: 280,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: '#ffff'}}>
        Kaydolarak veya giriş yaparak{' '}
        <TextContent color={'#1999CD'} text={'Şartlar ve Koşullar'} /> ve{' '}
        <TextContent color={'#1999CD'} text={'Gizlilik Politikasını'} />{' '}
        kabuletmiş
      </Text>
      <Text style={{color: '#ffff'}}>olursunuz.</Text>
    </View>
  );
};

export default FooterText;

{
  /* <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={{fontSize: 16, color: 'white'}}>
                Kaydolarak veya giriş yaparak{' '}
              </Text>
              <Text style={{fontSize: 16, color: '#578ab4'}}>Şartlar ve </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={{fontSize: 16, color: '#578ab4'}}>Koşullar </Text>
              <Text style={{fontSize: 16, color: 'white'}}>ve </Text>
              <Text style={{fontSize: 16, color: '#578ab4'}}>
                Gizlilik Politikasını{' '}
              </Text>
              <Text style={{fontSize: 16, color: 'white'}}>kabul etmiş</Text>
            </View>
            <Text style={{fontSize: 16, color: 'white', alignSelf: 'center'}}>
              olursunuz.
            </Text> */
}
