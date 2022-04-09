import { useMemo } from 'react'
import { ImageBackground, StyleSheet, Dimensions } from 'react-native'
import { staticUri } from '../api/constant'

type ImageIndex = '1' | '2' | '3' | '4' | '5' | '6' | 'default'

interface IProps {
  imageIndex: ImageIndex
}

const {width, height, scale} = Dimensions.get('window');

const styles = StyleSheet.create({
  imgStyle: {
    width,
    height,
    position: 'absolute',
  },
})

const BGImage: React.FC<IProps> = ({imageIndex = 'default'}) => {

  const imageUrl = useMemo(() => {
    return `${staticUri}/${imageIndex}.jpg`
  }, [imageIndex])

  return <>
    <ImageBackground
      style={styles.imgStyle}
      source={{
        uri: imageUrl
      }}
    />
  </>
}

export default BGImage
