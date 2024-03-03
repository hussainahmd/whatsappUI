import { View, Text, Image, TouchableOpacity } from "react-native";

export default function Welcome({navigation}) {
    
  return (
    <View className=" flex-1 bg-white justify-center items-center">
      <View className="items-center">
        <Image
          className="h-[300] w-[300]"
          source={require("../../assets/welcome-img.png")}
        />
      </View>

      <View className="justify-center items-center mt-16">
        <Text className="text-3xl font-medium">Welcome to WhatsApp</Text>
      </View>
      <View className=" items-center mt-8 px-2">
        <View className="flex-row">
          <Text className="text-base">Read our </Text>
          <TouchableOpacity>
            <Text className="text-base text-[#56a3c2] font-semibold">
              Privacy Policy
            </Text>
          </TouchableOpacity>
          <Text className="text-base">
            . Tap "Agree and continue"{" "}
          </Text>
        </View>
        <View className="flex-row">
          <Text className="text-base">to accept the </Text>
          <TouchableOpacity>
            <Text className="text-base text-[#56a3c2] font-semibold">
              Terms of Service
            </Text>
          </TouchableOpacity>
          <Text className="text-base">.</Text>
        </View>
      </View>

      <TouchableOpacity
        className="bg-[#008069] rounded-full top-28"
        onPress={() => navigation.navigate('LogIn')}
      >
        <Text className="text-xl text-white text-center py-3 px-20">
          Agree and continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
