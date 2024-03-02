import { View, Text, StatusBar } from 'react-native'
import React from 'react'

export default function Chats() {
    //StatusBar.setHidden(true);
    return (
        <View className='bg-[#25927a] flex-[.2]'>
            <StatusBar style="dark" backgroundColor='#25927a' />
            <Text>Chats</Text>
        </View>
    )
}