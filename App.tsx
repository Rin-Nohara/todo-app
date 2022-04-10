import { StatusBar } from 'react-native';

import Navigation from './navigation';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
        <>
          <Navigation />
          <StatusBar />
        </>
    );
  }
}
