
import React from 'react'
import { Text, View } from 'react-native'
import AppNavigation from './config/AppNavigation'
import Login from './pages/login/Login'

const App = () => {
  return (
      <View style={{ flex: 1 }}>
        <AppNavigation />
      </View>
  )
}

export default App