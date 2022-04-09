// package
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";

// global component
import ComponentWrap from "../../components/ComponentWrap";
import ScreenPadding from "../../components/ScreenPadding";
import BGImage from "../../components/BackGroundImage";

// screen component
import Welcome from "../../components/Welcome";
import AddTask from "../../components/AddTask";
import ShowTasks from "../../components/ShowTasks";

// style
import styles from "./styles";

function Main(props: { navigation: any }) {
  const { navigation } = props;

  return (
    <ComponentWrap
      wrapper={
        <BGImage imageIndex="1" />
      }
    >
      <SafeAreaView>
        <ScreenPadding>
          <Welcome />
          <View style={styles.btns}>
            <AddTask navigation={navigation} />
            <View style={styles.blank}></View>
            <ShowTasks navigation={navigation} />
          </View>
        </ScreenPadding>
      </SafeAreaView>
    </ComponentWrap>
  );
}

export default Main;
