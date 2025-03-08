import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

const Veggie = () => {
  const { id } = useLocalSearchParams();

  return <Text>Top-level Veggie {id}</Text>;
};

export default Veggie;
