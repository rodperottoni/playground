import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function VeggieReviews() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Reviews for veggie {id}</Text>
    </View>
  );
}
