import { StyleSheet, Text, SafeAreaView, View, Image, FlatList, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from "expo-router";
import axios from 'axios';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Entypo from '@expo/vector-icons/Entypo';

export default function instructions() {
  const { drinkId, imageLink } = useLocalSearchParams();
  const [instructions, setInstructions] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [measurements, setMeasurements] = useState([]);
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    getInstructions();
  }, [])

  useEffect(() => {
    getIngredients();
    getSteps();
    getMeasurement();
  }, [instructions])

  const getIngredients = () => {
    let ings = [];
    let key = "strIngredient";
    let keyCtr = 1;
    let counter = key + keyCtr;
  
    while (instructions[counter] !== undefined && instructions[counter] !== null){
        ings.push(instructions[counter]);
        keyCtr += 1;
        counter = key + keyCtr;
    }

    setIngredients(ings);
  }

  const getMeasurement = () => {
    let temp = [];
    let key = "strMeasure";
    let keyCtr = 1;
    let counter = key + keyCtr;

    while (instructions[counter] !== undefined && instructions[counter] !== null) {
      temp.push(instructions[counter]);
      keyCtr += 1;
      counter = key + keyCtr;
    }

    setMeasurements(temp);
  }
 
  const getSteps = () => {
    let temp_steps = instructions["strInstructions"];
    if(temp_steps !== undefined && temp_steps !== null) {
      temp_steps = temp_steps.split(".");
      temp_steps = temp_steps.filter((step) => step.length > 0);
      setSteps(temp_steps);
    }
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
    <View className="flex-1">
        <Image source={{uri: imageLink}} className="w-full h-[300px] rounded-3xl" />
        <View className="flex-1"> 
        {
          !instructions || !instructions.length === 0 ? (
            <View className="flex-1 items-center justify-center">
              <ActivityIndicator size="large" />
            </View>
          ) : (
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

              <Text className="text-[25px] font-bold mt-5">Ingredients</Text>
              <View>
              <FlatList 
                  className="my-5"
                  data={ingredients}
                  numColumns={2}
                  
                  contentContainerStyle={{
                    paddingHorizontal: wp(4),
                    alignItems: 'center', // Center items horizontally
                  }}
                  renderItem={({item, index}) => 
                    <View className="flex items-center bg-gray-200 rounded-xl" style={{ width: wp(44), margin: wp(2),}}>
                      <View className="flex flex-row my-2 flex-1 items-center">
                          <Entypo name="drink" size={30} />
                          <View className="ml-2">
                            <Text>{item}</Text>
                            <Text className="text-blue-600">{ measurements[index] }</Text>
                          </View>
                      </View>
                      <Image source={{uri: "https://www.thecocktaildb.com/images/ingredients/"+item+".png"}} className="w-1/4 h-[100px] rounded-3xl" />
                    </View>
              }
              />
              </View>

              <Text className="text-[25px] font-bold mt-5">Instructions</Text>
              <View>
                {
                  steps.map((step) => (
                    <View className="flex flex-row">
                      <Entypo name="dot-single" size={20} />
                      <Text>{ step.trim() }</Text>
                    </View>
                  ))
                }
              </View>
          </View>)
        }
        </View>
    </View>
  )
}

const styles = StyleSheet.create({})