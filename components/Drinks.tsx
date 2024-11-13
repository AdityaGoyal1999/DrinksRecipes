import { StyleSheet, Text, View, Image, ScrollView, FlatList, Pressable } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react'
import MasonryList from '@react-native-seoul/masonry-list'
import Animated, { FadeInDown } from 'react-native-reanimated';

const sampleData = [
  { idDrink: '1', strDrinkThumb: 'https://via.placeholder.com/150', strDrink: 'Drink 1' },
  { idDrink: '2', strDrinkThumb: 'https://via.placeholder.com/150', strDrink: 'Drink 2' },
];

export default function Drinks({ drinks }) {

  return (
    // <ScrollView className="mt-5">
    //   { drinks.map(drink => (
    //     <View className="items-center pt-4">
    //         <Image source={{ uri: drink.strDrinkThumb }} style={{ width: wp(90), height: wp(90)}} />
    //         <Text>{drink.strDrink}</Text>
    //     </View>
    //   )) }
    // </ScrollView>


    // <View className="flex mx-4 space-y-3">
    //   <Text>Recipes</Text>
    //   {
    //     drinks.length > 0 && 
    //     <MasonryList
    //       keyExtractor={(item): string => item.idDrink}
    //       ListHeaderComponent={null}
    //       contentContainerStyle={{
    //         paddingHorizontal: 24,
    //         alignSelf: 'stretch',
    //         backgroundColor: 'yellow',  // temporary color for debugging
    //       }}
    //       // onEndReached={() => console.log('onEndReached')}
    //       numColumns={2}
    //       data={drinks}
    //       renderItem={({item, i}) => {
          
    //         console.log(item)
    //         return <DrinkCard drink={item} index={i} />}
    //     }
    //     />
    //   }
      
    //   </View>

    <View className="mt-5">
      <FlatList
        keyExtractor={(item) => item.idDrink}
        // contentContainerStyle={{
        //   // paddingHorizontal: 24,
        //   // alignSelf: 'stretch',
        // }}
        numColumns={2}
        data={drinks}
        renderItem={({ item }) => {
          // console.log(item)
          return (
            <View className="bg-red-100 rounded-md m-2">
              <Image source={{ uri: item.strDrinkThumb }} style={{ width: wp(40), height: wp(40)}} />
              <Text style={{ fontSize: hp(1.5), color: '#4B5563', fontWeight: '600', marginLeft: 8 }}>
                {item.strDrink}
              </Text>
            </View>
          )}
        }
      />

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