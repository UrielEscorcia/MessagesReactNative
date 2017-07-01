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

export default class ListItem extends Component {

    static propTypes = {
        item: PropTypes.object.isRequired,
        onPress: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
    }


    render() {
        const item = this.props.item;
        return (
            <View style={styles.cellW}>

                <TouchableHighlight
                    onPress={ () => this.props.onPress() }
                    underlayColor={ '#E5E5E5' }
                    >
                    <View style={styles.cellInner}>

                         <Image
                            style={styles.media}
                            source={require('../../../../assets/img/pika.jpg')}
                        />


                        <View style={styles.contenido}>

                            <View style={styles.contenidoTop}>

                                <View style={styles.contenidoTopInfo}>
                                    <Text style={styles.contenidoTopInfoName}>
                                        Pikachu
                                    </Text>
                                    <Text style={styles.contenidoTopInfoStatus}>
                                        Online
                                    </Text>
                                </View>

                                <Icon name="ios-radio-button-on" style={styles.contenidoTopIcon}/>

                            </View>

                            <Text style={styles.contenidoBottom}>
                                I want my money bitch
                            </Text>

                        </View>

                    </View>
                </TouchableHighlight>

            </View>


        );
    }

}
