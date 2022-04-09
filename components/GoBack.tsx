import React, { useMemo } from "react";
import { View, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import ComponentWrap from './ComponentWrap'

interface IProps {
  color?: string;
  pressHandle?: () => any;
  navigation?: any;
}

const GoBack: React.FC<IProps> = ({
  color = "#fff",
  pressHandle,
}) => {
  const styles = useMemo(() => {
    return StyleSheet.create({
      
    });
  }, []);

  const navigation = useNavigation()

  function handle() {
    if(pressHandle) {
      pressHandle()
    } else {
      navigation.goBack()
    }
  }

  return (
    <View onTouchStart={handle}>
      <AntDesign name="arrowleft" size={24} color="black" />
    </View>
  );
};

export default GoBack;
