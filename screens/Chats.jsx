import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Chats() {
    //StatusBar.setHidden(true);
    return (
        <View className='flex-1'>
            <StatusBar style="dark" backgroundColor='#25927a' />
            <View className='bg-[#25927a] flex-[.16] '>
                <View className='flex-row flex-[.5] items-end bg-orange-200'>
                    <Text className='pl-8 text-white text-[26px] mr-[118]'>WhatsApp</Text>
                    <MaterialCommunityIcons name="camera-outline" size={30} color="white" style={{ marginRight: 20 }} />
                    <MaterialIcons name="search" size={30} color="white" style={{ marginRight: 20 }} />
                    <MaterialCommunityIcons name="dots-vertical" size={30} color="white" />
                </View>
                <View className='flex-row flex-[.5] bg-slate-400 pt-2'>
                    <View className='bg-orange-600 flex-[.5] items-center justify-center'>
                        <FontAwesome name="group" size={24} color="white"/>
                    </View>
                    <View className='bg-orange-500 flex-1 items-center justify-center'>
                        <Text className=' text-white text-[18px]'>Chats</Text>
                    </View>
                    <View className='bg-orange-400 flex-1 items-center justify-center'>
                        <Text className=' text-white text-[18px]'>Updates</Text>
                    </View>
                    <View className='bg-orange-300 flex-1 items-center justify-center'>
                        <Text className=' text-white text-[18px]'>Calls</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}