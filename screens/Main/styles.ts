import { StyleSheet, Dimensions } from 'react-native';

const {width, height, scale} = Dimensions.get('window');

export default StyleSheet.create({
    imgStyle: {
        width,
        height,
        position: 'absolute',
    },
    top: {
        zIndex: 99
    },
    box: {
        paddingLeft: 14,
        paddingRight: 14,
    },
    btns: {
        height: '70%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    blank: {
        height: 20,
    }
})
