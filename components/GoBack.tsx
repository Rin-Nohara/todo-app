import React, { useMemo } from "react";
import { View, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import ComponentWrap from './ComponentWrap'

interface IProps {
  color?: string;
  pressHandle?: () => any;
  navigation?: any;
}

const GoBack: React.FC<IProps> = ({
  color = "#fff",
  pressHandle,
  navigation
}) => {
  const styles = useMemo(() => {
    return StyleSheet.create({
      
    });
  }, []);

  function handle() {
    if(navigation) {
      navigation.goBack()
    } else {
      pressHandle && pressHandle();
    }
  }

  return (
    <View onTouchStart={handle}>
      <AntDesign name="arrowleft" size={24} color="black" />
    </View>
  );
};

export default GoBack;
