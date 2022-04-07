import { View } from 'react-native'

import GoBack from '../../components/GoBack';

const AddTask: React.FC<{navigation: any}> = ({navigation}) => {
  return (
    <>
      <GoBack navigation={navigation} />
    </>
  );
}

export default AddTask;
