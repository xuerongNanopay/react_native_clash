import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const App = () => {
  return (
    <View>
      <Text>App</Text>
      <Link href="/profile">Go to Profile</Link>
    </View>
  )
}

export default App