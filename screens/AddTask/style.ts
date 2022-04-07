import { StyleSheet, Dimensions } from 'react-native'

const {width, height, scale} = Dimensions.get('window');

export default StyleSheet.create({
  img: {
    width,
    height,
    position: 'absolute',
  },
  formStyle: {
    display: 'flex',
    height: 240,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  flexEnd: {
    width,
    height: height - 300,
    paddingLeft: 14,
    paddingRight: 14,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    
    backgroundColor: '#fff',
    position: 'absolute',
    top: 300,
    paddingBottom: 200,
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
  }
})
