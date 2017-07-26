/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    NavigatorIOS,
    StyleSheet,
    View
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';

import ChatsList from './app/components/ChatsList';
import Chat from './app/components/Chat';


const routesConfig = {
    ChatsList: { screen: ChatsList },
    Chat: { screen: Chat }
};

const stackNavigatorConfig = {
    navigationOptions: {
        headerTintColor: "rgba(0, 0, 0, 0.5)",
        headerBackTitle: null,
        headerStyle: {
            backgroundColor: 'white',
        },
    }
};

const App = StackNavigator(routesConfig, stackNavigatorConfig);


AppRegistry.registerComponent('MessagesReactNative', () => App);
