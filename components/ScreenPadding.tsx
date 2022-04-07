import {View, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  box: {
    paddingLeft: 14,
    paddingRight: 14,
  },
})

const ScreenPadding: React.FC<{children: any}> = ({children}) => {
  return <>
    <View style={styles.box}>
      {children}
    </View>
  </>
}

export default ScreenPadding;
