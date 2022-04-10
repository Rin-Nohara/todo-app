/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
 import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import { useNavigation } from '@react-navigation/native';
 import React, { useEffect } from 'react';
 import { ColorSchemeName } from 'react-native';
 
 import ModalScreen from '../screens/ModalScreen';
 import NotFoundScreen from '../screens/NotFoundScreen';
 import Main from '../screens/Main'
 import AddTask from '../screens/AddTask'
 import ViewAll from '../screens/ViewAll';
 import Login from '../screens/Login';
 import Register from '../screens/Register'
 
 import { RootStackParamList } from '../types';
 import LinkingConfiguration from './LinkingConfiguration';
 
 import { checkLoginStatus } from '../api'
 import { responseCode } from '../api/constant'
 
 export default function Navigation({ colorScheme }: { colorScheme?: ColorSchemeName }) {
   return (
     <NavigationContainer
       linking={LinkingConfiguration}
       theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
       <RootNavigator />
     </NavigationContainer>
   );
 }
 
 /**
  * A root stack navigator is often used for displaying modals on top of all other content.
  * https://reactnavigation.org/docs/modal
  */
 const Stack = createNativeStackNavigator<RootStackParamList>();
 
 function RootNavigator() {
 
   const navigation = useNavigation()
 
   useEffect(() => {
     checkLoginStatus().then(res => {
       const { status } = res
       
       if(responseCode.success === status) {
         navigation.navigate('Main')
       } else {
          navigation.navigate('Login')
       }
     })
   }, [])
   
   
   return (
     <Stack.Navigator>
       <Stack.Screen name="Main" component={Main} options={{ headerShown:false }} />
       <Stack.Screen name="AddTask" component={AddTask} options={{ headerShown:false }} />
       <Stack.Screen name="ViewAll" component={ViewAll} options={{ headerShown:false }} />
       <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />

       <Stack.Screen name="Login" component={Login} options={{ headerShown:false }} />
       <Stack.Screen name="Register" component={Register} options={{ headerShown:false }} />
 
       <Stack.Group screenOptions={{ presentation: 'modal' }}>
         <Stack.Screen name="Modal" component={ModalScreen} />
       </Stack.Group>
     </Stack.Navigator>
   );
 }
 