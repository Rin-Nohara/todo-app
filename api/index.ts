import { get, post } from './request'
import { LOGIN_URL, ADD_TASK } from './uri'
import { responseCode } from './constant'
import { setStorage } from '../utils/storage'

export async function login (telePhone: string, password: string) {
  try{
    const { data } = await post(LOGIN_URL, {
      telePhone,
      password
    })
  
    if(data.status === responseCode.success) {
      setStorage('token', data.data.token)
      return {
        status: responseCode.success,
        token: data.data.token
      }
    }
    throw new Error('登录失败')
  } catch (e: any) {
    return {
      status: responseCode.fail,
      error: e.message
    }
  }
}

export async function addTask (taskName: string, taskDescription: string) {
  try {
    const { data } = await post(ADD_TASK, {
      name: taskName,
      description: taskDescription
    })
  
    if(data.status === responseCode.success) {
      setStorage('token', data.data.token)
      return {
        status: responseCode.success,
        data: data.data
      }
    }
    throw new Error('添加失败')
  } catch(e: any) {
    return {
      status: responseCode.fail,
      error: e.message
    }
  }
}
