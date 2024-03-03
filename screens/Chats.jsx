import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import HeaderCell from './components/HeaderCell';
//import HeaderCell from '../components/HeaderCell';

export default function Chats() {
    //StatusBar.setHidden(true);
    return (
        <View className='flex-1 bg-slate-400'>
            <StatusBar style="dark" backgroundColor='#25927a' />
            <View className='bg-[#25927a] flex-[.16] '>
                <View className='flex-row flex-[.5] items-end'>
                    <Text className='pl-8 text-white text-[26px] mr-[118]'>WhatsApp</Text>
                    <MaterialCommunityIcons name="camera-outline" size={30} color="white" style={{ marginRight: 20 }} />
                    <MaterialIcons name="search" size={30} color="white" style={{ marginRight: 20 }} />
                    <MaterialCommunityIcons name="dots-vertical" size={30} color="white" />
                </View>
                <View className='flex-row flex-[.5] pt-2'>
                    <HeaderCell icon = {true}/>
                    <HeaderCell text='Chats'/>
                    <HeaderCell text='Updates'/>
                    <HeaderCell text='Calls'/>
                </View>
            </View>

        </View>
    )
}