import React, { useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";

interface IProps {
  text: string;
  color?: string;
  pressHandle?: () => any;
}

const Button: React.FC<IProps> = ({
  text,
  color = "#fff",
  pressHandle,
}) => {
  const styles = useMemo(() => {
    return StyleSheet.create({
      
    });
  }, []);

  function handle() {
    pressHandle && pressHandle();
  }

  return (
    <View onTouchStart={handle}>
      <Text>{text}</Text>
    </View>
  );
};

export default Button;
