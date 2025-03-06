import { Text } from "@react-navigation/elements";
import { StyleSheet, View } from "react-native";

export function Tamagui() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tamagui Sandbox</Text>
      <Text style={styles.description}>
        This is a sandbox for experimenting with Tamagui
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },
});
