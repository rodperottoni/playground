import { AppState, Button, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { supabase } from "../../src/utils/supabase";
import { makeRedirectUri } from "expo-auth-session";
import { useEffect } from "react";

WebBrowser.maybeCompleteAuthSession({
  skipRedirectCheck: true,
});

/**
 * Lessons learnt:
 * - Testing with HTTPs requires ngrok (npm i -g ngrok) and then running metro with `npx expo start --tunnel`
 * - Expo AuthSession doesn't seem to work well with supabase oauth.
 *    Instead, I have to call `signInWithOAuth` and then open the browser to the url it returns.
 *    I can use `WebBrowser.openAuthSessionAsync` to do this.
 * - access_token and refresh_token are returned in the hash fragment of the redirect url.
 * - `supabase.auth.setSession` can be called with the access_token and refresh_token to begin
 *
 */
export default function AccountTab() {
  useEffect(() => {
    const subscription = AppState.addEventListener("change", (state) => {
      if (state === "active") {
        supabase.auth.startAutoRefresh();
      } else {
        supabase.auth.stopAutoRefresh();
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <Button
      title="Login"
      onPress={async () => {
        const { data } = await supabase.auth.signInWithOAuth({
          provider: "github",
          options: {
            scopes: "identity",
            /**
             * Makes it so `signInWithOAuth` doesn't immediately redirect the browser to the OAuth provider.
             * It's up to me to go to the authorization url returned by this function call.
             */
            skipBrowserRedirect: true,
          },
        });

        if (data && data.url) {
          WebBrowser.openAuthSessionAsync(
            data.url,
            makeRedirectUri({
              scheme: "rudys-playground",
              preferLocalhost: true,
            })
          ).then((data) => {
            if (data.type === "success") {
              const { hash } = new URL(data.url);

              console.log("success logging in");
              const accessToken = hash
                .split("&")
                .find((param) => param.includes("access_token="))
                ?.split("=")[1];
              const refreshToken = hash
                .split("&")
                .find((param) => param.includes("refresh_token="))
                ?.split("=")[1];

              if (accessToken && refreshToken) {
                supabase.auth.setSession({
                  access_token: accessToken,
                  refresh_token: refreshToken,
                });
              }
            }
          });
        }
      }}
    />
  );
}
