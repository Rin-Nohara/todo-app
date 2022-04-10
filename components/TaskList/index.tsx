import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { getTasks } from '../../api'

import TaskItem, { TsakItemProps } from '../TaskItem'

const TaskList = () => {

  const [ taskList, setTaskList ] = useState<TsakItemProps[]>([]);

  // @ts-ignore
  useEffect(async () => {
    const res = await getTasks()
    setTaskList(res.data)
  }, [])

  return <>
    {
      taskList.map(item => {
        return <TaskItem key={item.id} id={item.id} thingName={item.thingName} thingDescription={item.thingDescription} />
      })
    }
  </>
}

export default TaskList
