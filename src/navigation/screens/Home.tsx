import { Button, Text } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

type SandboxItem = {
  id: string;
  title: string;
  description: string;
  screen: string;
};

const sandboxes: SandboxItem[] = [
  {
    id: "tamagui",
    title: "Tamagui",
    description: "UI toolkit for React Native and Web",
    screen: "Tamagui",
  },
  {
    id: "react-form",
    title: "Tanstack React Form",
    description: "Form state management for React",
    screen: "ReactForm",
  },
  {
    id: "valtio",
    title: "Valtio",
    description: "Proxy-based state management for React",
    screen: "Valtio",
  },
];

export function Home() {
  const navigation = useNavigation();

  const renderItem = ({ item }: { item: SandboxItem }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate(item.screen as never)}
    >
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Sandbox Experiments</Text>
      <FlatList
        data={sandboxes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 16,
  },
  item: {
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 14,
    color: "#666",
  },
});
