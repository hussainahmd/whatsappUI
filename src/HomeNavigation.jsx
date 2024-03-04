import React from "react"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import Chats from "./screens/Chats"
import Calls from "./screens/Calls"
import Updates from "./screens/Updates"
import Community from "./screens/Community"

const Tab = createMaterialTopTabNavigator()

export default function HomeNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarIndicatorStyle: {
          backgroundColor: 'white',
        },
        tabBarPressColor: '#72b6a6',
        tabBarLabelStyle: {
          fontWeight: 'bold'
        },
        tabBarStyle: {
          backgroundColor: '#25927a'
        },
        tabBarAndroidRipple: { borderless: false },
      }}
      
    >
      <Tab.Screen
        name='Community'
        component={Community}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='account-group' size={24} color={color} />
          ),
          tabBarShowLabel:false,
          //tabBarStyle:{width:30}
        }}
      />
      <Tab.Screen
        name='Chats'
        component={Chats}
        options={{
          tabBarLabel:'Chats',
        }}
      />
      <Tab.Screen
        name='Updates'
        component={Updates}
      />
      <Tab.Screen
        name='Calls'
        component={Calls}
      />
    </Tab.Navigator>
  )
}
