import { useGlobalSearchParams, usePathname } from "expo-router";
import { Stack } from "expo-router/stack";
import { useEffect } from "react";
import { tamaguiConfig } from "../src/styles/config";
import { TamaguiProvider } from "tamagui";

// export const unstable_settings = {
//   initialRouteName: "(tabs)",
// };

export default function Layout() {
  const pathname = usePathname();
  const params = useGlobalSearchParams();

  // Track the location in your analytics provider here.
  useEffect(() => {
    console.log({ pathname, params });
  }, [pathname, params]);

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="veggie"
          options={{ presentation: "modal", headerShown: false }}
        />
      </Stack>
    </TamaguiProvider>
  );
}
