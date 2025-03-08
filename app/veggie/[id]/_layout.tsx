import { Stack } from "expo-router";
import { useLocalSearchParams } from "expo-router";

export default function VeggieIdLayout() {
  const { id } = useLocalSearchParams();

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: `Veggie ${id}` }} />
      <Stack.Screen name="reviews" options={{ title: "Reviews" }} />
      <Stack.Screen name="wiki" options={{ title: "Wiki" }} />
    </Stack>
  );
}
