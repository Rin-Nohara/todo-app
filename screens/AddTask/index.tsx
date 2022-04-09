import { View, ImageBackground } from 'react-native'
import { useState } from 'react'

import ComponentWrap from '../../components/ComponentWrap';
import GoBack from '../../components/GoBack';
import ScreenPadding from '../../components/ScreenPadding';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { addTask } from '../../api'
import { responseCode } from '../../api/constant'

import styles from './style';

const AddTask: React.FC<{navigation: any}> = ({navigation}) => {

  const [taskName, setTaskName] = useState('');
  const [taskDetail, setTaskDetail] = useState('');

  async function handleAddTask () {
    const { status, data, error } = await addTask(taskName, taskDetail)
    if(status === responseCode.success) {
      navigation.goBack()
    }
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
            <Input valueChange={setTaskName} placeholder={'Task Name'} />
            <Input valueChange={setTaskDetail} multiline placeholder={'Task kDetail'} />
            <View style={styles.flexCenter}>
              <Button widthFill text='Add' pressHandle={handleAddTask} />
            </View>
          </View>
        </View>
    </ComponentWrap>
  );
}

export default AddTask;
