import { Text } from 'react-native'

import ComponentWrap from '../../components/ComponentWrap';
import GoBack from '../../components/GoBack';
import ScreenPadding from '../../components/ScreenPadding';

const ViewAll: React.FC<{navigation: any}> = ({navigation}) => {
  return (
    <ComponentWrap>
      <ScreenPadding>
        <GoBack navigation={navigation} />
        <Text>123</Text>
      </ScreenPadding>
    </ComponentWrap>
  );
}

export default ViewAll;
