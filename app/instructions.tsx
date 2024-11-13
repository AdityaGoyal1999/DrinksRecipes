import { StyleSheet, Text, SafeAreaView, View, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from "expo-router";
import axios from 'axios';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Entypo from '@expo/vector-icons/Entypo';

export default function instructions() {
  const { drinkId, imageLink } = useLocalSearchParams();
  const [instructions, setInstructions] = useState('');
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    getInstructions();
  }, [])

  useEffect(() => {
    getIngredients()
  }, [instructions])

  const getIngredients = () => {
    let ings = [];
    let key = "strIngredient";
    let keyCtr = 1;
    let counter = key + keyCtr;
    
    // console.log(instructions[counter])
    while (instructions[counter] !== undefined && instructions[counter] !== null){
        ings.push(instructions[counter]);
        keyCtr += 1;
        counter = key + keyCtr;
    }

    setIngredients(ings);
  }

  const getInstructions = async () => {
    try {
        let response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkId)
        setInstructions(response.data.drinks[0]);
    }
    catch(error) {
        console.error(error)
    }
  }

  

  return (
    <View>
        <Image source={{uri: imageLink}} className="w-full h-[300px] rounded-3xl" />
        <View className="mx-4 mt-4">
            <Text className="text-3xl font-bold">{ instructions.strDrink }</Text>
            <View className="flex flex-row flex-wrap gap-3">
                <View className="p-2 bg-blue-100 flex-wrap rounded-lg">
                    <Text className="">{ instructions.strCategory }</Text>
                </View>

                <View className="p-2 bg-orange-100 flex-wrap rounded-lg">
                    <Text className="">{ instructions.strAlcoholic }</Text>
                </View>
            </View>
            <FlatList 
                className="my-5"
                data={ingredients}
                renderItem={({item}) => 
                    <View className="flex flex-row mt-2">
                        <Entypo name="drink" size={20} />
                        <Text>
                            {item}
                        </Text>
                    </View>
            }
            />
        </View>
        <Text>{ JSON.stringify(instructions) }</Text>
    </View>
  )
}

const styles = StyleSheet.create({})