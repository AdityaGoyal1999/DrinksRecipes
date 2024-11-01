import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function Categories({ categories }) {
    
  return (
    <ScrollView horizontal={true} className="mt-3 mx-2" showsHorizontalScrollIndicator={false}>
      { 
        categories.map((category) => (
            <View className="bg-blue-200 p-5 mx-2 rounded-full">
                <Text>{ category }</Text>
            </View>
        )) 
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({})