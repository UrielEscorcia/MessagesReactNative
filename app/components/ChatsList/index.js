import React, { Component } from 'react';
import {
    FlatList,
    View,
    Text
} from 'react-native';

import styles from './styles';
import ListItem from './ListItem';
import Chat from '../Chat';

export default class ChatsList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            listOfData: [
                {
                    id: 1,
                    name:"yay"
                },
                {
                    id: 2,
                    name:"yay"
                },
                {
                    id: 3,
                    name:"yay"
                },
                {
                    id: 4,
                    name:"yay"
                },
                {
                    id: 5,
                    name:"yay"
                },
                {
                    id: 6,
                    name:"yay"
                },
                {
                    id: 7,
                    name:"yay"
                },
                {
                    id: 8,
                    name:"yay"
                },
                {
                    id: 9,
                    name:"yay"
                },
                {
                    id: 10,
                    name:"yay"
                },
                {
                    id: 11,
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

        return(
            <ListItem
                item={item}
                onPress={ () => this._chatView() }
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

    _chatView(){
        this.props.navigator.push({
            component: Chat,
            title: 'Pikachu',
            titleTextColor: "rgba(0, 0, 0, 0.5)",
            tintColor: "rgba(0, 0, 0, 0.5)",

        });
    }
}
