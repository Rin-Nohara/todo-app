import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setStorage(key: string, value: string | object) {
  let computedVal;

  if(value instanceof Object) {
    computedVal = JSON.stringify(value)
  } else {
    computedVal = value.toString()
  }
  
  try {
    await AsyncStorage.setItem(key, computedVal)
  } catch (e) {
    // saving error
  }
}

export async function getStorage(key: string) {
  return await AsyncStorage.getItem(key)
}

export async function getStorageObject(key: string) {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
  }
}

export async function removeStorage(key: string) {
  try {
    await AsyncStorage.removeItem(key)
  } catch(e) {
    // remove error
  }
}

export async function clearStorage() {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    // clear error
  }
}

