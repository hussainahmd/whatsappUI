import { Text } from "react-native";
import { useAssets } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./screens/SignIn";
import LogIn from "./screens/LogIn";
import Welcome from "./screens/Welcome";
import Info from "./screens/Info";
import Chats from "./screens/Chats";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Chats" component={Chats} />
        {/* <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: true, title:'Enter Ph'}}/>*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function Main() {
  const [assets] = useAssets(
    require("./assets/icon-square.png"),
    require("./assets/chatbg.png"),
    require("./assets/user-icon.png"),
    require("./assets/welcome-img.png")
  );
  if (!assets) return <Text>Loading...</Text>;

  return <App/>
}
