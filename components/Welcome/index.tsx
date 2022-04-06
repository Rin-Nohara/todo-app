import * as React from "react";
import { View, Text } from 'react-native';
import styles from './index.styles';

const Welcome: React.FC = () => {
  return <View style={styles.container}>
    <Text style={styles.title}>
        Hello
    </Text>
    <Text style={styles.subTitle}>
        start your beautiful day.
    </Text>
  </View>;
};

export default Welcome;
