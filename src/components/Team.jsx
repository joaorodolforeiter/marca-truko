import { Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function Team({ score, add, remove, defaultName }) {
  return (
    <View className="flex-1 items-center justify-around">
      <View className="items-center">
        <Text className="text-6xl text-[#eeeeee] uppercase font-semibold">
          {defaultName}
        </Text>
        <Text className="text-4xl text-[#ff4444]">
          {Math.floor(score / 12)}
        </Text>
      </View>
      <Text className="text-8xl text-[#eeeeee]">{score % 12}</Text>
      <View>
        <TouchableOpacity onPress={add}>
          <MaterialCommunityIcons
            name="arrow-up-drop-circle-outline"
            size={100}
            color="#eeeeee"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={remove}>
          <MaterialCommunityIcons
            name="arrow-down-drop-circle-outline"
            size={100}
            color="#eeeeee"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
