/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Register from './Screens/Register';
import Login from './Screens/Login';
import Welcome from './Screens/Welcome';

import {Image, Platform} from 'react-native';
import Chat from './Screens/Chat';
import MyTabBar from './Components/TabBar';
import UserCar from './Screens/UserCar';
import Camera from './Screens/Camera';
import Profil from './Screens/Profil';

const Router = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  function Home() {
    return (
      <Tab.Navigator
        initialRouteName={'Welcome'}
        tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen
          name="Welcome"
          component={Welcome}
          options={{title: 'Vitrin'}}
        />
        <Tab.Screen name="UserCar" component={UserCar} />
        <Tab.Screen name="Camera" component={Camera} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Profil" component={Profil} />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerTitle: null,
            headerBackImage: props => {
              return (
                <Image
                  source={require('./Assets/backButton.png')}
                  style={{
                    marginLeft: Platform.OS === 'ios' ? 15 : 0,
                  }}
                />
              );
            },
            headerBackTitle: null,
            headerBackTitleVisible: false,
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
