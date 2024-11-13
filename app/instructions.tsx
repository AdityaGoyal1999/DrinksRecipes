import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from "expo-router";
import axios from 'axios';

export default function instructions() {
  const { drinkId } = useLocalSearchParams();
  const [instructions, setInstructions] = useState('');

  useEffect(() => {
    getInstructions();
  }, [])

  const getInstructions = async () => {
    try {
    let response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkId)
    setInstructions(response.data.drinks[0])
    }
    catch(error) {
        console.error(error)
    }
  }

  return (
    <SafeAreaView>
      <Text>{ JSON.stringify(instructions) }</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})