import React, { useRef, useState } from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import { SIZES, constants } from '../../../constants'

const ITEM_WIDTH = 100;

export default function Walkthrough1() {

    const [rowImgs, setRowImgs]= useState([
        ...constants.walkthrough_01_01_images,
        ...constants.walkthrough_01_01_images,
    ])


    const [currentPos, srtCurrentPos] = useState(0)

    const [row2Imgs, setRow2Imgs]= useState([
        ...constants.walkthrough_01_02_images,
        ...constants.walkthrough_01_02_images,
    ])

    const [currentPos2, srtCurrentPos2] = useState(0)


    const row1FlatList = useRef()
    const row2FlatList = useRef()


  return (
    <View>
      <FlatList 
    //   horizontal
    showsHorizontalScrollIndicator={false}
    snapToInterval={SIZES.width}
      ref={row1FlatList}
    data={rowImgs}
    keyExtractor={(_, id) => `slide_${id}`}
      renderItem={({item, id}) =>{
        return(
            <View style={{
                width: ITEM_WIDTH,
                alignItems: 'center',
                justifyContent: 'center',
            }}>

                <Image 
                source={item}
                style={{
                    width: 110,
                    height:110
                }}
                />
            </View>
        )
      }}
      
      />
    </View>
  )
}