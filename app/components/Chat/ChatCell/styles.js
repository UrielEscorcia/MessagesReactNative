
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    chatCellW: {
        flex: 1,

    },
    chatCellInner: {
        margin: 8,
        maxWidth: '65%',
        borderRadius: 10,
        padding: 8,
    },
    meSent: {
        alignSelf: 'flex-end',
        backgroundColor: '#A3E08F',
    },
    youSent: {
        alignSelf: 'flex-start',
        backgroundColor: 'rgba(64, 51, 216, 0.3)',
    },
    chat: {
        fontWeight: '300',
        fontSize: 16,
        // textAlign: 'right',
        color: 'rgba(1, 1, 1, 0.5)',
    },


});

export default styles;
