import {
  ErrorBoundaryProps,
  Link,
  useNavigation,
  useRouter,
} from "expo-router";
import { Text, View } from "react-native";

const Page = () => {
  const router = useRouter();
  const navigation = useNavigation();

  return (
    <>
      <Text>Top-level page</Text>
      <Link href="/veggie/testeroni" />
    </>
  );
};

export const ErrorBoundary = ({ error, retry }: ErrorBoundaryProps) => {
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <Text>{error.message}</Text>
      <Text onPress={retry}>Try Again?</Text>
    </View>
  );
};

export default Page;
