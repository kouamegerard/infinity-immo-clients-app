// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Webview from '../LandingPage/Webview';


const AppNavigator = () => {
  return (
    <Webview />
  );
};

export default AppNavigator;
