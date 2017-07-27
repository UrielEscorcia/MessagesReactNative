import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    TouchableHighlight,
    View,
    Image,
    Text
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

export default class ChatCell extends Component {

    static propTypes = {
        item: PropTypes.object.isRequired,
        onPress: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
    }


    render() {
        const item = this.props.item;
        const rowStyle = item.user === 'me' ? styles.meSent : styles.youSent;
        return (
            <View style={styles.chatCellW}>
                <View style={[styles.chatCellInner, rowStyle]}>

                    <Text style={styles.chat}> { item.message } </Text>

                </View>
            </View>

        );
    }

}
