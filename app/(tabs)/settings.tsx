import { useRouter } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function SettingsTab() {
  const router = useRouter();

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
