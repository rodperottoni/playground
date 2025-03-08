import { Link } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function Tab() {
  return (
    <View style={styles.container}>
      <Link
        style={{
          backgroundColor: "#ABC",
          width: 100,
          textAlign: "center",
          padding: 20,
        }}
        href="/veggie/testeroni"
      >
        Go to Veggie
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
