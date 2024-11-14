import { StyleSheet, Text, View, Image, ScrollView, FlatList, Pressable, ActivityIndicator } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react'
import MasonryList from '@react-native-seoul/masonry-list'
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useNavigation } from 'expo-router';


export default function Drinks({ drinks }) {
  const navigation = useNavigation();
  return (

    <View className="mt-5 flex-1">
      { !drinks || !drinks.length ?
        (
          <View className="flex-1 items-center justify-center">
            <ActivityIndicator size="large" />
          </View>
        ) :
        (
          <FlatList
          keyExtractor={(item) => item.idDrink}
          numColumns={2}
          data={drinks}
          contentContainerStyle={{
            paddingHorizontal: wp(4),
            alignItems: 'center', // Center items horizontally
          }}
          showsVerticalScrollIndicator={false}
          renderItem={
            ({ item }) => 
              {
              return (
                <Pressable 
                  onPress={() => navigation.navigate("instructions", {drinkId: item.idDrink, imageLink: item.strDrinkThumb})}
                  className="flex items-center"
                  style={{
                    width: wp(44),
                    margin: wp(2),
                  }}
                >
                  <View className="bg-gray-200 rounded-2xl overflow-hidden p-2">
                    <Image source={{ uri: item.strDrinkThumb }} style={{ width: wp(40), height: wp(40)}} className="rounded-md" />
                    <Text style={{ fontSize: hp(1.5), color: '#4B5563', fontWeight: '600', marginLeft: 8 }} className="mt-2">
                      {
                        item.strDrink.length > 23 ? item.strDrink.slice(0, 20) + "..." : item.strDrink
                      }
                    </Text>
                  </View>
                </Pressable>
              )}
          }
        />
        )
      }
    

  </View>

  )
}

const DrinkCard = ({ drink, index }) => {
  return (
    // <View style={{ marginBottom: 16, alignItems: 'center' }}>
    //   <Image source={{ uri: drink.strDrinkThumb }} style={{ width: wp(40), height: wp(40)}} />
       <Text style={{fontSize: hp(1.5)}} className="font-semibold ml-2 text-neutral-600">{drink.strDrink}</Text>
    // </View>
  )
}


const styles = StyleSheet.create({})