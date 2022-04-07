import React, { useMemo } from "react";
import { View, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import ComponentWrap from './ComponentWrap'

interface IProps {
  color?: string;
  pressHandle?: () => any;
  navigation?: any;
}

const Button: React.FC<IProps> = ({
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
    <ComponentWrap>
      <View onTouchStart={handle}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </View>
    </ComponentWrap>
  );
};

export default Button;
