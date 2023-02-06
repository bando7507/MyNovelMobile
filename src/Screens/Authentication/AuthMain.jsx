import React, { useEffect, useState} from 'react'
import { View, 
    Text, 
    Image, 
    StyleSheet, 
    Pressable,
    FlatList, 
    TouchableOpacity, 
    Modal,
    TouchableWithoutFeedback 
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SIZES, constants, COLORS, images, FONTS, icons } from '../../../constants'
import { FormInput } from '../../components'
import CountryDropDown from '../../components/CountryDropDown'
import IconButton from '../../components/IconButton'
import ChexBox from '../../components/ChexBox'



export default function AuthMain() {

  const [mode, setMode] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [country, setCountry] = useState([])
  const [showCountryModal, setShowCountryModal] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [termsChecked, setTermsCheck] = useState(false)

  const getCountries = async () =>{
    const api = await fetch('https://restcountries.com/v3.1/all')
    const data = await api.json()
    // setCountry(state => [...state, data])
    setCountry(data)
  
  }
  useEffect(() =>{
    getCountries()
  }, [])

  const  renderLogIn = () =>{
    return(
    <View style={{
      marginTop: SIZES.padding,
      height: SIZES.height * .55
    }}>

        <View style={styles.containerAuth}>
            <Text style={{
                width: '60%',
                color: COLORS.dark,
                ...FONTS.h1
            }}>
                Sign in to continue
            </Text>

            <KeyboardAwareScrollView
            enableOnAndroid={true}
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps={'handled'}
            extraScrollHeight={-300}
            contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'center'
            }}
            >
                {/* mail */}
                <FormInput 
                containerStyle={{
                    borderRaduis: SIZES.radius,
                    // backgroundColor: COLORS.error
                }}
                placeholer='Email'
                value={email}
                onChange={(text) => setEmail(text)}
                prependComponent={
                    <Image 
                    source={icons.email}
                    style={{
                        width: 25,
                        height: 25,
                        marginRight: SIZES.base
                    }}
                    />
                }
                />
                {/* password */}
                <FormInput 
                containerStyle={{
                    marginTop: SIZES.radius,
                    borderRaduis: SIZES.radius,
                    // backgroundColor: COLORS.error
                }}
                placeholer='password'
                value={password}
                secureTextEntry={!isVisible}
                onChange={(text) => setPassword(text)}
                prependComponent={
                    <Image 
                    source={icons.lock}
                    style={{
                        width: 25,
                        height: 25,
                        marginRight: SIZES.base
                    }}
                    />
                }
                appendComponent={
                  <IconButton 
                  icon={isVisible ? icons.eye_off : icons.eye}
                  iconStyle={{
                    tinColor: COLORS.grey
                  }}
                  onPress={() => setIsVisible(!isVisible)}
                  />
                }
                />
                <View style={{
                  alignItems: 'flex-end'
                }}>
                  <TouchableOpacity style={{
                    marginTop: SIZES.radius,

                  }}>
                    <Text style={{
                      color: COLORS.support3,
                      ...FONTS.h4
                    }}>
                      Forget Password
                    </Text>
                  </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>

            <Pressable 
              style={{
                alignItems: 'center',
                justifyContent:'center',
                height: 50,
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.radius
              }}>
                <Text style={{
                  fontSize: SIZES.h3,
                  color: COLORS.light
                }}>
                  Log In
                </Text>
              </Pressable>
        </View>
    </View>
    )
  }
  const renderSignIn = () =>{
    return(
    <View style={{
      marginTop: SIZES.padding,
      height: SIZES.height * .7
    }}>

<View style={styles.containerAuth}>
            <Text style={{
                width: '60%',
                lineHeight: 45,
                ...FONTS.h1
            }}>
                Create new account
            </Text>

            <KeyboardAwareScrollView
            enableOnAndroid={true}
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps={'handled'}
            extraScrollHeight={-300}
            contentContainerStyle={{
                flexGrow: 1,
                // marginTop: SIZES.padding,
                // paddingBottom: SIZES.padding * 2,
                // justifyContent: 'center'
            }}
            >
              {/* Name   */}
              <FormInput 
                containerStyle={{
                  borderRaduis: SIZES.radius,
                  marginTop: SIZES.radius
                }}
                placeholer='Name'
                value={name}
                onChange={(text) => setName(text)}
                prependComponent={
                  <Image 
                  source={icons.person}
                  style={{
                    width: 25,
                    height: 25,
                    marginRight: SIZES.base
                  }}
                  />
                }
              />
                {/* mail */}
                <FormInput 
                containerStyle={{
                    borderRaduis: SIZES.radius,
                    marginTop: SIZES.radius
                }}
                placeholer='Email'
                value={email}
                onChange={(text) => setEmail(text)}
                prependComponent={
                    <Image 
                    source={icons.email}
                    style={{
                        width: 25,
                        height: 25,
                        marginRight: SIZES.base
                    }}
                    />
                }
                />

                {/* phone */}
                <FormInput 
                containerStyle={{
                    borderRaduis: SIZES.radius,
                    marginTop: SIZES.radius
                }}
                placeholer='Email'
                value={phone}
                onChange={(text) => setPhone(text)}
                prependComponent={
                    <Image 
                    source={icons.phone}
                    style={{
                        width: 25,
                        height: 25,
                        marginRight: SIZES.base
                    }}
                    />
                }
                />
                {/* drop */}
                <CountryDropDown
                selectedCountry={selectedCountry}
                onPress={() => setShowCountryModal(!showCountryModal)}
                />

                 {/* password */}
                 <FormInput 
                containerStyle={{
                    marginTop: SIZES.radius,
                    borderRaduis: SIZES.radius,
                    // backgroundColor: COLORS.error
                }}
                placeholer='password'
                value={password}
                secureTextEntry={!isVisible}
                onChange={(text) => setPassword(text)}
                prependComponent={
                    <Image 
                    source={icons.lock}
                    style={{
                        width: 25,
                        height: 25,
                        marginRight: SIZES.base
                    }}
                    />
                }
                appendComponent={
                  <IconButton 
                  icon={isVisible ? icons.eye_off : icons.eye}
                  iconStyle={{
                    tinColor: COLORS.grey
                  }}
                  onPress={() => setIsVisible(!isVisible)}
                  />
                }
                />

                {/* trems */}

              <ChexBox 
              containerStyle={{
                marginTop: SIZES.radius
              }}
              isSelected={termsChecked}
              onPress={() => setTermsCheck(!termsChecked)}
              />
            </KeyboardAwareScrollView>

            <Pressable 
              style={{
                alignItems: 'center',
                justifyContent:'center',
                height: 50,
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.radius
              }}>
                <Text style={{
                  fontSize: SIZES.h3,
                  color: COLORS.light
                }}>
                  Create Account
                </Text>
              </Pressable>
        </View>
        {renderCountryModal()}
    </View>
    )
  }


  const renderAuthContainer = () =>{

    if(!mode){
      return renderSignIn()
    }else{
      return renderLogIn()
    }
    
  }

  const renderCountryModal = () =>{
    return(
      <Modal
      animationType='slide'
      transparent={true}
      visible={showCountryModal}
      >
        <TouchableWithoutFeedback 
        onPress={() => setShowCountryModal(false)}
        >
          <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.dark80
            }}
            >
            <View
            style={{
              height: 400,
              width: SIZES.width * 0.8,
              backgroundColor: COLORS.light,
              borderRadius: SIZES.radius
            }}
            >
              <FlatList 
              data={country}
              keyExtractor={(item) => item.name.common}
              contentContainerStyle={{
                paddingHorizontal: SIZES.padding,
                paddingBottom: SIZES.padding,
              }}
              renderItem={({item}) =>{
                return(
                  <TouchableOpacity
                  style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: SIZES.radius
                  }}
                  onPress={() =>{
                    setSelectedCountry(item) 
                    setShowCountryModal(false)
                  }}
                  >
                    <Image
                    source={{uri: item.flags.png}}
                    resizeMode= 'contain'
                    style={{
                      width: 50,
                      height: 40
                    }} 
                    />
                    <View>
                      <Text style={{ flex: 1, marginLeft: SIZES.radius, ...FONTS.body3 }}>
                        {item.name.common}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )
              }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>

      </Modal>
    )
  }

  return (
    <View style={{
      flex: 1,
      paddingHorizontal:  SIZES.padding,
      backgroundColor: COLORS.lightGrey
    }}>
      <Image 
      source={images.logo}
      style={{
        alignSelf: 'center',
        marginTop: SIZES.padding * 2,
        width: 50,
        height: 50
      }}
      />
      <View>
        {renderAuthContainer()}
      </View>

      <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary
      }}
      onPress={() => setMode(!mode)}
      >
        <View style={{
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{
                color: COLORS.light
            }}>
                Toggle
            </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  containerAuth: {
    flex: 1,
    width: SIZES.width - (SIZES.padding * 2),
    padding: SIZES.padding,
    backgroundColor: COLORS.light,
    shadowColor: COLORS.primary,  
    elevation: 20,  
    borderRadius: 2
  }
})