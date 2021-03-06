import React, { Component } from 'react';
import {
    FlatList,
    View,
    KeyboardAvoidingView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import ReversedFlatList from 'react-native-reversed-flat-list';

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
                    id: 0,
                    user: 'me',
                    message:"yay"
                },
                {
                    id: 1,
                    user: 'me',
                    message:"In React Native flex does not work the same way that it does in CSS."
                },
                {
                    id: 2,
                    user: 'you',
                    message:"look"
                },
                {
                    id: 3,
                    user: 'you',
                    message:"win :D "
                }
            ],
            height: 0,
            typing: "",
        };

    }

    render() {
        return (

            <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={64}
            style={styles.container}>

                <ReversedFlatList
                    data={ this.state.listOfData }
                    renderItem={ ({item}) =>  this.renderRowCell(item)}
                    keyExtractor={item => item.id}

                />

                <View style={[styles.footer, {height: this.state.height + 20}]}>
                    <View style={styles.footerInner}>
                        <TextInput
                            value={this.state.typing}
                            onChangeText={text => this.setState({typing: text})}
                            style={styles.textInput}
                            multiline={true}
                            onChange={(e) => this.onChange(e)}

                        />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={()=> this.sendMessage()}
                            activeOpacity={0.5} >

                            <Icon name="md-send" style={styles.send}/>
                        </TouchableOpacity>
                    </View>

                </View>
            </KeyboardAvoidingView>

        );
    }

    sendMessage(){
        let text = this.state.typing.trim();
        if (text.length > 0) {

            const message = {
                id: this.state.listOfData.length,
                user: 'me',
                message: text
            };

            const listOfData = [...this.state.listOfData, message];
            this.setState({
               listOfData: listOfData,
               typing: ""
            });
        }

    }

    onChange(e) {
        const contentSize = e.nativeEvent.contentSize;

        if (this.state.height !== contentSize.height) {
            this.setState({
               height: contentSize.height
            });
        }

    }

    renderRowCell(item){

        return(
            <ChatCell
                item={item}
                onPress={ () => console.log() }
            />
        );
    }

}
