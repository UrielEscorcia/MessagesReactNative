
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
        paddingRight: 26,
        paddingTop: 5,
        paddingBottom: 5,
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: 16,
        lineHeight: 16,
        borderRadius: 22,
        borderColor: "#F2F2F2",
        borderWidth: 1,

    },
    send: {
        position: 'absolute',
        top: '50%',
        right: 16,
        alignItems: 'center',

        fontSize: 30,
        height: 30,

        transform: [
            { translateY: -5 },
        ],

        color: 'rgba(0, 0, 0, 0.8)',

    }
});

export default styles;
