import { Link, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";


export default function Index() {
  const naviagation = useNavigation();
  useEffect(()=> {
    setTimeout(() => naviagation.navigate('home'), 0)
  }, [])

  return (
    <View>
      <Text>Hello</Text>
      <Link href="/home">Home Page</Link>
    </View>
  );
}
