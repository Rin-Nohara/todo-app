
import { SafeAreaView } from 'react-native-safe-area-context';
import { ReactElement, ReactNode } from 'react';

function ComponentWrap (props: {
  wrapper?: ReactNode | ReactElement | undefined;
  children: any
}) {

  const {wrapper, children} = props;
  
  return (
    <>
      {wrapper}
      <SafeAreaView>
        {children}
      </SafeAreaView>
    </>
  )
}

export default ComponentWrap;
