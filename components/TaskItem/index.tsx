import { View } from 'react-native'

export type TsakItemProps = {
  id: number
  thingName: string
  thingDescription?: string
}

const TaskItem: React.FC<TsakItemProps> = ({ thingName, thingDescription }) => {

  console.log(thingName, thingDescription);

  return <></>
}

export default TaskItem
