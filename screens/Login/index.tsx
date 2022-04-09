import React, { useState } from 'react'
import { View } from 'react-native'

import styles from './style';

import Input from '../../components/Input'
import ComponentWrap from '../../components/ComponentWrap';
import Button from '../../components/Button';

import { login } from '../../api'

import { responseCode } from '../../api/constant'

const Login: React.FC<{navigation: any}> = ({navigation}) => {

  const [telePhone, setTelePhone] = useState('')
  const [password, setPassWord] = useState('')

  async function handleLogin() {
    const { status } = await login(telePhone, password)
    if(status === responseCode.success) {
      navigation.navigate('Main')
    }
  }

  return <>
    <ComponentWrap>
      <View style={styles.flexEnd}>
        <View style={styles.formStyle}>
          <Input valueChange={setTelePhone} placeholder='TelePhone' />
          <Input valueChange={setPassWord} placeholder='Password' />
          <View style={styles.flexCenter}>
            <Button widthFill text='Login' pressHandle={handleLogin} />
          </View>
        </View>
      </View>
    </ComponentWrap>
  </>
}

export default Login
