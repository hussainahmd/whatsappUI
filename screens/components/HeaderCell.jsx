import { View, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export default function HeaderCell(props) {
  return (
    <View className={`flex-[${props.icon ? '.5' : '1'}] items-center justify-center border-b-4 border-b-white`}>
      {props.icon ?
        <FontAwesome name="group" size={22} color="white" />
        :
        <Text className=' text-white text-[20px] absolute'>{props.text}</Text>
      }
    </View>
  )
}