import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React from 'react'

export default function Categories({ categories, activeCategory, handleCategoryChange }) {
  
  return (
    <ScrollView horizontal={true} className="mt-3 mx-2" showsHorizontalScrollIndicator={false}>
      { 
        categories.map((category) => (
          <Pressable onPress={() => handleCategoryChange(category)}>
            <View 
              className={`bg-blue-200 p-5 mx-2 rounded-full ${category === activeCategory? "border-2 border-blue-500" : ""}`}
            >
                <Text>{ category }</Text>
            </View>
          </Pressable>
        )) 
      }
    </ScrollView>
  )
}


const styles = StyleSheet.create({})