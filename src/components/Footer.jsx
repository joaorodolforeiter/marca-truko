import { TouchableOpacity, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function Footer({ truco = 1, onPress, ...rest }) {
  return (
    <View
      activeOpacity={1}
      className="h-20 flex items-center justify-center border-t-2 border-white w-full bg-[#222222]"
      {...rest}
    >
      <TouchableOpacity
        className="justify-center items-center"
        onPress={onPress}
      >
        {truco == 1 ? (
          <MaterialCommunityIcons name="cards-spade" size={56} color="white" />
        ) : (
          <Text className="text-[#eeeeee] text-5xl">{truco}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
