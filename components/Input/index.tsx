import { TextInput } from 'react-native'
import { useState, useEffect } from 'react'
import styles from './style'

const Input: React.FC<{
  valueChange: (value: any) => any,
  multiline?: boolean,
  numberOfLines?: number,
  placeholder?: string,
  required?: boolean
}> = ({valueChange, multiline = false, numberOfLines = 2, placeholder = 'Task', required = false}) => {

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
          placeholder={placeholder}
          value={value}
          numberOfLines={numberOfLines}
          style={styles.textArea}
          multiline
        />:
        <TextInput
          style={required ? styles.inputRequired : styles.input}
          onChangeText={text => onChangeText(text)}
          placeholder={placeholder}
          value={value}
        />
    }
  </>
}

export default Input
