import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack } from "expo-router";

import "../global.css";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export default function RootLayout() {
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <GluestackUIProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </GluestackUIProvider>
  );
}
