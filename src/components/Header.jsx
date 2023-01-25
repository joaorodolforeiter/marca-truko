import { Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts, Lobster_400Regular } from "@expo-google-fonts/lobster";

export function Header({ reset }) {
  let [fontsLoaded] = useFonts({
    Lobster_400Regular,
  });
  return (
    <View className="h-20 w-full flex-row justify-between border-b-2 border-white items-center bg-[#222222] p-6">
      <MaterialCommunityIcons
        className=""
        name="cards-spade"
        size={32}
        color="white"
      />
      <Text
        style={fontsLoaded && { fontFamily: "Lobster_400Regular" }}
        className="text-3xl text-[#ff4444]"
      >
        Marca Truko
      </Text>
      <TouchableOpacity onPress={reset}>
        <MaterialCommunityIcons name="reload" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
}
