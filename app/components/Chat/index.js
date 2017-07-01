import React, { Component } from 'react';
import {
    FlatList,
    View,
    Text
} from 'react-native';

import styles from './styles';


export default class Chat extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.container}>
                <Text> Chat View </Text>
            </View>
        );
    }

}
