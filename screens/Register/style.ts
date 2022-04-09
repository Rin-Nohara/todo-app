import { StyleSheet, Dimensions } from 'react-native'

const {width, height, scale} = Dimensions.get('window');

export default StyleSheet.create({
  formStyle: {
    display: 'flex',
    height: 350,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  flexEnd: {
    width,
    height: height,
    paddingLeft: 14,
    paddingRight: 14,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: 200,
    
    backgroundColor: 'rgba(255,255,255,0)',
    position: 'absolute',
    borderRadius: 14
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
  }
})
