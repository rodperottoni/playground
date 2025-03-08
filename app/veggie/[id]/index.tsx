import {
  ErrorBoundaryProps,
  Link,
  useLocalSearchParams,
  usePathname,
} from "expo-router";
import { Text, View } from "react-native";

const Veggie = () => {
  const { id } = useLocalSearchParams();

  const pathname = usePathname();

  return (
    <View>
      <Text>Veggie: {id}</Text>
      <Text>current path: {pathname}</Text>
      <Link href={`/veggie/${id}/reviews`}>Reviews</Link>
      <Link href={`/veggie/${id}/wiki`}>Wiki</Link>
    </View>
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

export default Veggie;
