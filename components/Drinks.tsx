import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react'

export default function Drinks({ drinks }) {
  return (
    <ScrollView className="mt-5">
      { drinks.map(drink => (
        <View className="items-center pt-4">
            <Image source={{ uri: drink.strDrinkThumb }} style={{ width: wp(90), height: wp(90)}} />
            <Text>{drink.strDrink}</Text>
        </View>
      )) }
    </ScrollView>
  )
}

const styles = StyleSheet.create({})