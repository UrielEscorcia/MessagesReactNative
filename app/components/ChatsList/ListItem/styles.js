
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    cellW: {
        flex: 1,
        backgroundColor: 'white'
    },
    cellInner:{
        flex: 1,
        flexDirection: 'row',
        padding: 16
    },
    media:{
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    contenido:{
        flex: 1,
        marginLeft: 10
    },
    contenidoTop:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    contenidoTopInfo:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    contenidoTopInfoName:{
        color: 'rgba(0, 0, 0, 0.8)',

        fontSize: 24,
        fontWeight: "300",

        height: 24,
        margin:0
    },
    contenidoTopInfoStatus:{
        color: 'rgba(0, 0, 0, 0.8)',

        fontSize: 11,
        fontWeight: "300",

        height: 11,
        marginLeft: 10
    },
    contenidoTopIcon:{
        color: '#33D892',
        fontSize: 16,
    },
    contenidoBottom:{
        flex:1,

        fontWeight: "100",
        fontSize: 13,
        height: 13,

        color: 'rgba(0, 0, 0, 0.5)',
    }

});

export default styles;
