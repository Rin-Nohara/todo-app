import { View, ImageBackground } from 'react-native'
import { useState } from 'react'

import ComponentWrap from '../../components/ComponentWrap';
import GoBack from '../../components/GoBack';
import ScreenPadding from '../../components/ScreenPadding';
import Button from '../../components/Button';

import Input from '../../components/Input';

import styles from './style';

const AddTask: React.FC<{navigation: any}> = ({navigation}) => {

  const [taskName, setTaskName] = useState();
  const [taskDetail, setTaskDetail] = useState();

  function addTask () {
    console.log(taskName, taskDetail);
  }

  return (
    <ComponentWrap
      wrapper={
        <ImageBackground
          style={styles.img}
          source={require("../../assets/images/default_bgimg.jpeg")}
        />
      }
    >
      <ScreenPadding>
        <GoBack navigation={navigation} />
      </ScreenPadding>
      <View style={styles.flexEnd}>
          <View style={styles.formStyle}>
            <Input valueChange={setTaskName} />
            <Input valueChange={setTaskDetail} multiline />
            <View style={styles.flexCenter}>
              <Button widthFill text='Add' pressHandle={addTask} />
            </View>
          </View>
        </View>
    </ComponentWrap>
  );
}

export default AddTask;
