import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import Categories from '@/components/Categories';
import Drinks from '@/components/Drinks';

export default function home() {

  const [activeCategory, setActiveCategory] = useState("Cocktail");
  const [categories, setCategories] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    getCategories();
    getDrinks();
  }, [])

  useEffect(() => {
  }, [categories])

  let getCategories = async () => {
    try{
    let response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");
    if (response && response.data){
      let drinks = response.data.drinks; // list of dictionaries
      setCategories(drinks.map(drinkDict => drinkDict.strCategory))
    }
    }
    catch(error){
      console.error(error);
    }
  }

  let getDrinks = async () => {
    try {
      let response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail");
      if (response && response.data){
        setDrinks(response.data.drinks);
      }
    }
    catch(error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView>
      <View className="justify-between flex-row mx-4">
        <Image source={require("../assets/images/avatar.png")} style={{height: hp(5), width: wp(10)}} />
        <Text>There</Text>
      </View>

      <View className="m-4">
        <Text className="text-[35px] font-bold">Search <Text className="text-blue-500">cocktails</Text></Text>
        <Text className="text-[35px] font-bold">For Any Occasion</Text>
      </View>

      <View className="bg-slate-300 rounded-full mx-4 p-2 flex-row justify-between">
        <TextInput 
          placeholder="Search Cocktails"
          className="tracking-wide pl-3 flex-1"
        />
        <View className="bg-white rounded-full p-3 ml-2">
          <MagnifyingGlassIcon color="gray"/>
        </View>
      </View>

      <View>
        { categories && <Categories categories={categories}/>}
      </View>

      <View>
        { drinks && <Drinks drinks={drinks}/> }
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})