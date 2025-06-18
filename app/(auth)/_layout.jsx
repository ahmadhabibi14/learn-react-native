import { Stack } from "expo-router";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, false),
      }}
    />
  )
}