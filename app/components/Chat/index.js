import React, { Component } from 'react';
import {
    FlatList,
    View,
    Text,
    TextInput
} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

import ChatCell from './ChatCell';

export default class Chat extends Component {

    static navigationOptions = {
        title: 'Pikachu',

    };

    constructor(props) {
        super(props);

        this.state = {
            listOfData: [
                {
                    id: 1,
                    user: 'me',
                    name:"yay"
                },
                {
                    id: 2,
                    user: 'me',
                    name:"In React Native flex does not work the same way that it does in CSS."
                },
                {
                    id: 3,
                    user: 'you',
                    name:"look"
                },
                {
                    id: 4,
                    user: 'you',
                    name:"win :D "
                }
            ],
            height: 0
        };

    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={ this.state.listOfData }
                    renderItem={ ({item}) =>  this._renderRowCell(item)}
                    keyExtractor={item => item.id}

                />
                <View style={[styles.footer, {height: this.state.height + 20}]}>
                    <View style={styles.footerInner}>
                        <TextInput
                            style={[styles.textInput, {}]}
                            multiline={true}
                            onChange={(e) => this.onChange(e)}

                        />
                        <Icon name="ios-send" style={styles.send}/>
                    </View>

                </View>
            </View>
        );
    }

    onChange(e) {
        const contentSize = e.nativeEvent.contentSize;
        // console.log(contentSize)
        if (this.state.height !== contentSize.height) {
            this.setState({
               height: contentSize.height
            });
        }

    }

    _renderRowCell(item){

        return(
            <ChatCell
                item={item}
                onPress={ () => console.log() }
            />
        );
    }

}
