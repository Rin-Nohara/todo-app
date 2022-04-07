
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, ImageBackground } from 'react-native';

import Welcome from '../../components/Welcome'
import AddTask from '../../components/AddTask'
import ShowTasks from '../../components/ShowTasks'

import styles from './styles'

function Main (props: {navigation: any}) {
  
  const { navigation } = props;

  return (
    <>
      <ImageBackground
      style={styles.imgStyle}
      source={require('../../assets/images/default_bgimg.jpeg')}
    />
    <SafeAreaView>
      <View style={styles.box}>
        <Welcome />
        <View style={styles.btns}>
          <AddTask navigation={navigation} />
          <View style={styles.blank}></View>
          <ShowTasks navigation={navigation} />
        </View>
      </View>
    </SafeAreaView>
    </>
  )
}

export default Main;
