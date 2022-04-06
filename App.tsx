import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, View, StatusBar } from 'react-native';

import Welcome from './components/Welcome'
import AddTask from './components/AddTask'
import ShowTasks from './components/ShowTasks'

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';

import styles from './styles'

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
        <>
          <Image
            style={styles.imgStyle}
            source={require('./assets/images/default_bgimg.jpeg')}
          />
          <SafeAreaView>
            <View style={styles.box}>
              <Welcome />
              <View style={styles.btns}>
                <AddTask />
                <View style={styles.blank}></View>
                <ShowTasks />
              </View>
            </View>
          </SafeAreaView>
          <StatusBar backgroundColor="transparent" />
        </>
    );
  }
}
