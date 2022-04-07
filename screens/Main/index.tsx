// package
import { SafeAreaView } from "react-native-safe-area-context";
import { View, ImageBackground } from "react-native";

// global component
import ComponentWrap from "../../components/ComponentWrap";
import ScreenPadding from "../../components/ScreenPadding";

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
        <ImageBackground
          style={styles.imgStyle}
          source={require("../../assets/images/default_bgimg.jpeg")}
        />
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
