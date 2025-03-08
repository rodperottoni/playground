import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function VeggieWiki() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Wiki information for veggie {id}</Text>
    </View>
  );
}
