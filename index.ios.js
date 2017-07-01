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

import ChatsList from './app/components/ChatsList';

export default class MessagesReactNative extends Component {
    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: ChatsList,
                    title: 'Messages',
                    titleTextColor: "rgba(0, 0, 0, 0.5)",
                    tintColor: "rgba(0, 0, 0, 0.5)",
                    rightButtonSystemIcon: 'compose',
                    translucent: true,
                    backButtonTitle: ' '
                }}
                style={ styles.container }
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    }
})

AppRegistry.registerComponent('MessagesReactNative', () => MessagesReactNative);
