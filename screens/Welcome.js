import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'

export default function Welcome() {
  return (
    <View className=' flex-1 bg-white justify-center items-center'>
        <View className='items-center'>
            <Image className='h-[300] w-[300]' source={require('../assets/welcome-img.png')}/>
        </View>

        <View className='justify-center items-center mt-16'>
            <Text className='text-3xl font-medium'>Welcome to WhatsApp</Text>
        </View>
        <View className=' items-center mt-8 px-2'>
            <View className='flex-row'>
                <Text className='text-base text-[#353b3e]'>Read our </Text>
                <TouchableOpacity>
                    <Text className='text-base text-[#56a3c2] font-bold'>Privacy Policy</Text>
                </TouchableOpacity>
                <Text className='text-base text-[#353b3e]'>. Tap "Agree and continue" </Text>
            </View>
            <View className='flex-row'>
                <Text className='text-base text-[#353b3e]'>to accept the </Text>
                <TouchableOpacity>
                    <Text className='text-base text-[#56a3c2] font-bold'>Terms of Service</Text>
                </TouchableOpacity>
                <Text className='text-base'>.</Text>
            </View>
        </View>

        <TouchableOpacity className='bg-[#008069] rounded-full top-28'>
            <Text className='text-xl text-white text-center py-3 px-20'>Agree and continue</Text>
        </TouchableOpacity>
    </View>
  )
}