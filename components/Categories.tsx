import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React from 'react'

export default function Categories({ categories, activeCategory, handleCategoryChange }) {
  return (
    <ScrollView horizontal={true} className="mt-3 mx-2" showsHorizontalScrollIndicator={false}>
      { 
        categories.map((category) => (
          <Pressable onPress={() => handleCategoryChange(category)}>
            <View 
              className={` p-5 mx-2 rounded-full ${category === activeCategory? "bg-blue-500" : "bg-blue-200"}`}
            >
                <Text className={category === activeCategory? "text-white": ""}>{ category }</Text>
            </View>
          </Pressable>
        )) 
      }
    </ScrollView>
  )
}


const styles = StyleSheet.create({})