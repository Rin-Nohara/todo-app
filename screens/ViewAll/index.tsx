import { Text } from 'react-native'

import GoBack from '../../components/GoBack'

const ViewAll: React.FC<{navigation: any}> = ({navigation}) => {
  return (
    <>
      <GoBack navigation={navigation} />
    </>
  );
}

export default ViewAll;
