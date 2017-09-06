/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

//导入stack导航组件
import { StackNavigator } from 'react-navigation';

import  Reactnav from  './src/pages/ReactNav';
import  ReactSecNav from  './src/pages/ReactNavSec'
import ReactThirdNav from  './src/pages/ReactThiNav'

//导航注册
  const  MyApp = StackNavigator({
    Home:{screen:Reactnav},
    NavSec:{screen:ReactSecNav},
    NavThird:{screen:ReactThirdNav},
});

AppRegistry.registerComponent('MyApp', () => MyApp);
