import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import DATA from '../data/chatdata'

export default function Chats() {
  const [chatData, setChatData] = useState(DATA)

  useEffect(() => {//
    setChatData(DATA)
  })

  return (
    <View className='flex-1 mt-[8]'>
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity className='flex-row mr-[12] ml-[12] items-center'>
            <Image source={item.photos} className='w-[50] h-[50] rounded-full items-center justify-center' />
            <View className='flex-[1] border-b-0 ml-[16] py-4'>
              <View style={styles.chatHeader}>
                <Text className='font-semibold text-lg'>{item.name}</Text>
                <Text className='text-[14px] text-[#4b4b45]'>{item.time}</Text>
              </View>
              <View style={styles.messages}>
                <Text className='text-[14px] w-[90%] text-[#4b4b45]' numberOfLines={1}>
                  {item.lastMessage}
                </Text>
                {item.totalUnread > 0 && (
                  <View className='h-[20] w-[20] rounded-full bg-[#25D366] items-center justify-center'>
                    <Text className='text-[12px] text-white font-[600]'>{item.totalUnread}</Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        className='absolute bottom-[20] right-[20] w-[70] h-[70] rounded-[20px] items-center justify-center bg-[#25927a]'
        onPress={() => ('#')}
      >
        <MaterialCommunityIcons name='android-messages' size={38} color='white' />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom:2,
    // backgroundColor:'#69e7ff',
    // marginBottom:4,
    // marginTop:4,
    // padding:4
  },
  messages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop:2,
    // backgroundColor: '#1ed760',
  }
})
