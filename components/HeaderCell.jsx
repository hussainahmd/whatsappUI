import { View, Text } from 'react-native'

export default function HeaderCell(props) {
  return (
      <View className='flex-1 items-center justify-center border-b-4 border-b-white'>
          <Text className=' text-white text-[20px] absolute'>{props.text}</Text>
      </View>
  )
}