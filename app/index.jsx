import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack text-green-800">Foree!</Text>
      {/* <Link href="/profile">Go to Profile</Link> */}
    </View>
  )
}

export default App