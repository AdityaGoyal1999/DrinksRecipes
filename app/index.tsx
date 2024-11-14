import { Link, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Text, View, SafeAreaView, ActivityIndicator } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';


export default function Index() {
  const naviagation = useNavigation();
  useEffect(()=> {
    setTimeout(() => naviagation.navigate('home'), 3000)
  }, [])

  return (
    <View className="flex-1">
      <SafeAreaView className="flex-1 justify-center items-center">
        <View className="flex items-center">

          <Entypo name="drink" size={60} />
          <Text className="text-[35px] font-bold">Drinkly</Text>
          <Text className="text-[20px]">Discover & Try New Drinks</Text>
          <ActivityIndicator size="large" className="mt-20"/>
        </View>
      </SafeAreaView>
    </View>
  );
}
