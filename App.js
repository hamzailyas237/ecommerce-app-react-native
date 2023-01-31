
import React from 'react'
import { View } from 'react-native'
import AppNavigation from './config/AppNavigation'
import 'react-native-gesture-handler';

const App = () => {
  return (
      <View style={{ flex: 1 }}>
        <AppNavigation />
      </View>
  )
}

export default App