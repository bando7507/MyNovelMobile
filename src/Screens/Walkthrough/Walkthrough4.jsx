import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { images, SIZES } from '../../../constants'

export default function Walkthrough4() {
  return (
    <View style={{
      width: SIZES.width,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
        <Image 
        source={images.walkthrough_01_07}
        style={{
            ...styles.image,
        }}
        />
        <Image 
        source={images.walkthrough_01_06}
        style={{
          ...styles.image,
          width: 156,
          height: 152,
          top:  '5%',
          left: '-25%'
        }}
        />
        <Image 
        source={images.walkthrough_01_05}
        style={{
            ...styles.image,
            width: 176,
            height: 172,
            top:  '70%',
            left: '85%'
        }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
      position: 'absolute',
      width: 256,
      height: 252,
      zIndex: 0,
      borderRadius: SIZES.radius
    }
  })