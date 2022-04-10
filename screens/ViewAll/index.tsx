import { Text } from 'react-native'

import ComponentWrap from '../../components/ComponentWrap';
import GoBack from '../../components/GoBack';
import ScreenPadding from '../../components/ScreenPadding';
import BGImage from '../../components/BackGroundImage';

import TaskList from '../../components/TaskList';

const ViewAll: React.FC<{navigation: any}> = ({navigation}) => {
  return (
    <ComponentWrap
      wrapper={<BGImage imageIndex='2' />}
    >
      <ScreenPadding>
        <GoBack navigation={navigation} />
        <TaskList />
      </ScreenPadding>
    </ComponentWrap>
  );
}

export default ViewAll;
