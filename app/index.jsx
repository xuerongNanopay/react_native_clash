import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack text-green-800">Foree!</Text>
      <StatusBar style="auto"/>
      <Link href="/home">Go to home</Link>
    </View>
  )
}

export default App