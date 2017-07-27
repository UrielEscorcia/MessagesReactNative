
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    footer: {
        minHeight: 55,
        maxHeight: 120,
    },
    footerInner: {
        flex: 1,
        borderTopColor: "#F2F2F2",
        borderTopWidth: 1.5,
        padding: 10,

        position: 'relative'
    },
    textInput: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 35,
        paddingTop: 5,
        paddingBottom: 5,
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: 16,
        lineHeight: 16,
        borderRadius: 22,
        borderColor: "#F2F2F2",
        borderWidth: 1,

    },
    button:{
        position: 'absolute',
        transform: [
            { translateY: -5 },
        ],

        bottom: 6,
        right: 16,
        borderRadius: 20,

    },
    send: {
        flex: 1,
        fontSize: 27,
        height: 27,
        width: 27,
        color: 'rgba(0, 0, 0, 0.6)',
        backgroundColor: 'transparent',

        textAlign: 'center',

    }
});

export default styles;
