import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vmlcxgmahggydxktgrqp.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtbGN4Z21haGdneWR4a3RncnFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0MDk4OTUsImV4cCI6MjA1Njk4NTg5NX0.CT7WUH1GhHfYRwHzmqJXFNniVJKay0_6oenACHY3jGc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
