import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { Octicons } from "@expo/vector-icons";

export default function LogIn({ navigation }) {
  const [isTouched, setIsTouched] = useState(false);
  const [isTouched2, setIsTouched2] = useState(false)

  return (
    //items-center
    <View className=" flex-1 bg-white items-center">
      <View className="mt-16 items-center">
        <Text className="text-[22px] text-[#25927a] font-bold">
          Enter your phone number
        </Text>
      </View>

      <View className=" mt-8 items-center">
        <Text className="text-base">
          WhatsApp will need to verify your phone number.
        </Text>
      </View>
      <View className=" flex-row justify-center">
        <Text className="text-base">Carrier charges may apply. </Text>
        <TouchableOpacity>
          <Text className="text-base text-[#56a3c2] font-semibold">
            What's my number?
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        className={`mt-5 w-[300] h-[50] border-b-[#25927a] border-b${isTouched ? "-[3px]" : ""
          }`}
        onPress={() => setIsTouched(!isTouched)}
      >
        <View className=" flex-grow flex-row items-center justify-center">
          <Text className="text-xl">Pakistan</Text>
          <Octicons
            name="triangle-down"
            size={24}
            color="#006653"
            style={{ marginLeft: 50 }}
          />
        </View>
      </TouchableOpacity>

      <View className="mt-5 flex-row items-center">
        <View className='border-b-[3px] flex-row items-center border-b-[#25927a]'>
          <Text className="text-xl"> + </Text>
          <TextInput
            className="w-[70] h-[40] text-xl text-center"
            keyboardType="numeric"
            maxLength={3}
          />
        </View>

        <TextInput
          className="ml-6 w-[160] h-[40] text-xl border-b-[#25927a] border-b-[3px]"
          keyboardType="numeric"
          placeholder="phone number"
          maxLength={15}
        />
      </View>

      <TouchableOpacity className="bg-[#25927a] rounded-full absolute bottom-[40]" onPress={() => navigation.navigate('Chats')}>
        <Text className="text-xl text-white text-center py-3 px-[30]">Next</Text>
      </TouchableOpacity>
    </View>
  );
}
