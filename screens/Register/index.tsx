import React, { useState } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import styles from './style';

import Input from '../../components/Input'
import ComponentWrap from '../../components/ComponentWrap';
import Button from '../../components/Button';
import BGImage from '../../components/BackGroundImage';

import { register } from '../../api'

import { responseCode } from '../../api/constant'

const Login: React.FC<{}> = () => {

  const [telePhone, setTelePhone] = useState('')
  const [password, setPassWord] = useState('')
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')

  const navigation = useNavigation()

  async function handleLogin() {
    const { status } = await register(telePhone, password, userName, userEmail)
    if(status === responseCode.success) {
      navigation.navigate('Login')
    }
  }

  return <>
    <ComponentWrap
      wrapper={<BGImage imageIndex='2' />}
    >
      <View style={styles.flexEnd}>
        <View style={styles.formStyle}>
          <Input valueChange={setUserName} placeholder='UserName' required />
          <Input valueChange={setTelePhone} placeholder='TelePhone' required />
          <Input valueChange={setPassWord} placeholder='Password' />
          <Input valueChange={setUserEmail} placeholder='UserEmail' />
          <View style={styles.flexCenter}>
            <Button widthFill text='Register' pressHandle={handleLogin} />
          </View>
        </View>
      </View>
    </ComponentWrap>
  </>
}

export default Login
