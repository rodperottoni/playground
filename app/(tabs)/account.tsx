import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View, StyleSheet, Button } from "react-native";
// import * as WebBrowser from "expo-web-browser";
// import { makeRedirectUri, useAuthRequest } from "expo-auth-session";

// WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: "https://github.com/login/oauth/authorize",
  tokenEndpoint: "https://github.com/login/oauth/access_token",
  revocationEndpoint: `https://github.com/settings/connections/applications/${process.env.OAUTH_CLIENT_ID}`,
};

export default function AccountTab() {
  // const [request, response, promptAsync] = useAuthRequest(
  //   {
  //     clientId: process.env.OAUTH_CLIENT_ID,
  //     scopes: ["identity"],
  //     redirectUri: makeRedirectUri({
  //       scheme: "rudys-playground",
  //     }),
  //   },
  //   discovery
  // );

  // useEffect(() => {
  //   if (response?.type === "success") {
  //     const { code } = response.params;
  //   }
  // }, [response]);

  return (
    <Button
      // disabled={!request}
      title="Login"
      onPress={() => {
        // promptAsync();
      }}
    />
  );
}
