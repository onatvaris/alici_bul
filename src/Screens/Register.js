/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  ActivityIndicator,
  Platform,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FooterText from '../Components/FooterText';
import {useQuery} from '@apollo/client';
import {GET_COUNTRİES} from '../Graphql/queries';
import {Picker} from '@react-native-picker/picker';

const {height, width} = Dimensions.get('window');

const Register = props => {
  const [Emoji, setEmoji] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [Phone, setPhone] = useState('');
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [Countries, setCountries] = useState([]);
  const [Loading, setLoading] = useState(true);
  const _keyboardDidShow = () => setKeyboardStatus(true);
  const _keyboardDidHide = () => setKeyboardStatus(false);
  // sorguları graphql ile yaptım ama geliştirme aşamasındayken api erişimim kesildi :D
  const {loading, refetch} = useQuery(GET_COUNTRİES, {
    onCompleted: data => {
      if (data.countries.length) {
        setCountries(data.countries.slice(0, 4));
      }
    },
  });

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
    // bayraklar svg formatında geldiği için sorun yarattı
    const fetchData = async () => {
      await fetch('https://restcountries.eu/rest/v2/all?fields=name;flag')
        .then(response => response.json())
        .then(json => {
          setLoading(false);
          setCountries(json.slice(0, 10));
        })
        .catch(error => {
          console.error(error);
        });
    };
    // fetchData();
    refetch();
    console.log(Countries);
    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#262626'}}
      scrollEnabled={keyboardStatus}>
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
              Kayıt Olun
            </Text>
            <TextInput
              placeholder="Ad"
              placeholderTextColor="#cccc"
              style={styles.input}
              onSubmitEditing={Keyboard.dismiss}
            />
            <TextInput
              placeholder="Soyad"
              placeholderTextColor="#cccc"
              style={styles.input}
              onSubmitEditing={Keyboard.dismiss}
            />
            <TextInput
              placeholder="İl"
              placeholderTextColor="#cccc"
              style={styles.input}
              onSubmitEditing={Keyboard.dismiss}
            />
            <TextInput
              placeholder="İlçe"
              placeholderTextColor="#cccc"
              style={styles.input}
              onSubmitEditing={Keyboard.dismiss}
            />
            {/* BAYRAKLAR-ÜLKELER */}
            <View
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                flexDirection: 'row',
                width: wp('85%'),
                borderBottomColor: '#ffff',
                borderBottomWidth: 0.5,
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                marginTop: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{margin: 10, fontSize: Platform.OS === 'ios' ? 50 : 20}}>
                {Emoji}
              </Text>
              <Picker
                mode="dropdown"
                style={{color: 'white', flex: 1, fontSize: 14}}
                itemStyle={{height: 100, color: 'white'}}
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) => {
                  setSelectedLanguage(itemValue);
                  setEmoji(Countries[itemIndex]?.emoji);
                  setPhone(Countries[itemIndex]?.phone);
                }}>
                {Countries?.map((v, i, a) => {
                  return (
                    <Picker.Item
                      style={{fontSize: 14}}
                      label={v.name}
                      value={v.name}
                      key={res => console.log(`res`, res)}
                    />
                  );
                })}
              </Picker>
              <Image />
            </View>
            <View
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: wp('85%'),
                borderBottomColor: '#ffff',
                borderBottomLeftRadius: 6,
                borderBottomRightRadius: 6,
              }}>
              <Text
                style={{
                  color: '#fff',
                  borderRightColor: '#fff',
                  borderRightWidth: 0.5,
                  padding: 8,
                }}>
                {Phone}
              </Text>
              <TextInput
                placeholder="530 700 00 00"
                placeholderTextColor="#ffff"
                style={{flex: 1, paddingLeft: 7}}
                onSubmitEditing={Keyboard.dismiss}
              />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.navigation.navigate('Home')}>
              <Text style={{color: 'white', fontSize: 16}}>Devam Et</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textContainer}>
            <View style={{flexDirection: 'row', marginTop: 8}}>
              <View style={styles.line} />
              <Text
                style={{paddingHorizontal: 25, color: 'white', fontSize: 16}}>
                veya
              </Text>
              <View style={styles.line} />
            </View>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                alignSelf: 'center',
                marginVertical: 20,
              }}
              onPress={() => props.navigation.navigate('Login')}>
              Giriş Yapın
            </Text>
            <FooterText />
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  imageContainer: {
    height: hp('20%'),
    justifyContent: 'flex-end',
    alignItems: 'center',
    backfaceVisibility: 'visible',
  },
  contentContainer: {
    height: hp('76%'),
    marginTop: 10,
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
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
    marginVertical: 5,
  },
  button: {
    backgroundColor: 'rgba(25, 153, 205, 0.2)',
    width: wp('85%'),
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 6,
  },
  line: {
    width: (width * 32) / 100,
    borderWidth: 1,
    height: 0,
    alignSelf: 'center',
    borderColor: '#828894',
  },
});
