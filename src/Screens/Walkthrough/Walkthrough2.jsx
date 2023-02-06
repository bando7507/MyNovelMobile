import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { images, SIZES } from '../../../constants'
// import { MotiView, useDynamicAnimation } from 'moti'

export default function Walkthrough2() {

  // const motiImg1 = useDynamicAnimation(() =>({
  //   top: '30%',
  //   left: '25%'
  // }))



  return (
    <View style={{
      width: SIZES.width,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      <Image
      source={images.walkthrough_02_01}
      style={{
        ...styles.image,
        top: '35%',
        left: '35%',
        width: 106,
        height: 161,
        zIndex: 1
      }} 
      />
      <Image
      source={images.walkthrough_02_02}
      style={{
        ...styles.image,
        top: '50%',
        left: '55%'
      }} 
      />

<Image
      source={images.walkthrough_02_03}
      style={{
        ...styles.image,
        top: '30%',
        left: '25%'
      }} 
      />

<Image
      source={images.walkthrough_02_04}
      style={{
        ...styles.image,
        top: '45%',
        left: '15%'
      }} 
      />
<Image
      source={images.walkthrough_02_05}
      style={{
        ...styles.image,
        top: '58%',
        left: '25%'
      }} 
      />
<Image
      source={images.walkthrough_02_06}
      style={{
        ...styles.image,
        top: '61%',
        left: '40%'
      }} 
      />
<Image
      source={images.walkthrough_02_07}
      style={{
        ...styles.image,
        top: '27%',
        left: '50%'
      }} 
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
  image:{
    position: 'absolute',
    width: 86,
    height: 112,
    zIndex: 0,
    borderRadius: SIZES.radius
  }
})