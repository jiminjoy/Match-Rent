import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import RentInformation from '../screens/RentInformation';
import SettingsScreen from '../screens/SettingsScreen';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import AddRent from '../screens/AddRent';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen, 
    Signup: {screen: Signup}, 
    Login: {screen: Login},

  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const AddRentStack = createStackNavigator(
  {
    Links: AddRent,
  },
  config
);

AddRentStack.navigationOptions = {
  tabBarLabel: 'Add Rent',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

AddRentStack.path = '';

const RentStack = createStackNavigator(
  {
    Links: RentInformation ,
  },
  config
);

RentStack.navigationOptions = {
  tabBarLabel: 'Rent Info',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

RentStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  AddRentStack,
  RentStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
