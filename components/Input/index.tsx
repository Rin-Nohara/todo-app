import { TextInput } from 'react-native'
import { useState, useEffect } from 'react'
import styles from './style'

const Input: React.FC<{
  valueChange: (value: any) => any,
  multiline?: boolean,
  numberOfLines?: number
}> = ({valueChange, multiline = false, numberOfLines = 2}) => {

  const [ value, setValue ] = useState<string>('');

  function onChangeText(text: any) {
    setValue(text)
  }

  useEffect(() => {
    valueChange && valueChange(value)
  }, [value])

  return <>
    {
      multiline ?
        <TextInput
          onChangeText={text => onChangeText(text)}
          placeholder='Task detail'
          value={value}
          numberOfLines={numberOfLines}
          style={styles.textArea}
          multiline
        />:
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeText(text)}
          placeholder='Task name'
          value={value}
        />
    }
  </>
}

export default Input
