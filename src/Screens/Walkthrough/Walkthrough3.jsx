import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { images, SIZES } from '../../../constants'

export default function Walkthrough3() {
  return (
    <View style={{
        width: SIZES.width,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    }}>
        <Image 
        source={images.walkthrough_01_01}
        style={{
            ...styles.image,
            top: '10%',
            left: '14%'
        }}
        />
        <Image 
        source={images.walkthrough_01_03}
        style={{
            ...styles.image,
            top: '30%',
            left: '50%'
        }}
        />
        <Image 
        source={images.walkthrough_01_04}
        style={{
            ...styles.image,
            top: '50%',
            left: '12%'
        }}
        />
        <Image 
        source={images.walkthrough_01_02}
        style={{
            ...styles.image,
            top: '65%',
            left: '55%'
        }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
      position: 'absolute',
      width: 156,
      height: 152,
      zIndex: 0,
      borderRadius: SIZES.radius
    }
  })