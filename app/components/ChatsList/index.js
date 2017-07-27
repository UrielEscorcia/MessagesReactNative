import React, { Component } from 'react';
import {
    FlatList,
    View,
    Button,
    Text
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import ListItem from './ListItem';
import Chat from '../Chat';

export default class ChatsList extends Component {

    static navigationOptions = {
        title: 'Messages',
        // headerRight: <Icon name="ios-add" />
    };

    constructor(props) {
        super(props);

        this.state = {
            listOfData: [
                {
                    id: 1,
                    name:"yay"
                }
            ]
        };
    }


    render() {

        return (
            <View style={styles.container}>
                <FlatList
                    data={ this.state.listOfData }
                    renderItem={ ({item}) =>  this._renderRowCell(item)}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={this._renderSeparator}
                />
            </View>
        );
    }

    _renderRowCell(item){
        const { navigate } = this.props.navigation;
        return(
            <ListItem
                item={item}
                onPress={ () => navigate('Chat') }
            />
        );
    }

    _renderSeparator(){
        return (
            <View
                style={styles.separator}
            />
        );
    }

    _headerRightButton(){
        return(
            <Icon name="ios-add" />
        );
    }

    _chatView(){
        // this.props.navigator.push({
        //     component: Chat,
        //     title: 'Pikachu',
        //     titleTextColor: "rgba(0, 0, 0, 0.5)",
        //     tintColor: "rgba(0, 0, 0, 0.5)",

        // });
    }
}
