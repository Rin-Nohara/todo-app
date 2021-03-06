import React, { useState } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import styles from './style';

import Input from '../../components/Input'
import ComponentWrap from '../../components/ComponentWrap';
import Button from '../../components/Button';
import BGImage from '../../components/BackGroundImage';

import { login } from '../../api'

import { responseCode } from '../../api/constant'

const Login: React.FC<{}> = () => {

  const [telePhone, setTelePhone] = useState('')
  const [password, setPassWord] = useState('')

  const navigation = useNavigation()

  async function handleLogin() {
    const { status } = await login(telePhone, password)
    if(status === responseCode.success) {
      navigation.navigate('Main')
    }
  }

  function goRegister() {
    navigation.navigate('Register')
  }

  return <>
    <ComponentWrap
      wrapper={<BGImage imageIndex='2' />}
    >
      <View style={styles.flexEnd}>
        <View style={styles.formStyle}>
          <Input valueChange={setTelePhone} placeholder='TelePhone' />
          <Input valueChange={setPassWord} placeholder='Password' />
          <Button widthFill text='Login' pressHandle={handleLogin} />
          <Button widthFill bgColor='#fff' textColor='#003366' text='Go Register' pressHandle={goRegister} />
        </View>
      </View>
    </ComponentWrap>
  </>
}

export default Login
