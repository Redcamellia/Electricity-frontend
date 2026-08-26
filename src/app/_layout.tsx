import "@/src/global.css";
import { Stack } from "expo-router";

import { useCSSVariable } from "uniwind";
export default function RootLayout() {
  const headerBg = useCSSVariable("--color-border");
  const tintColor = useCSSVariable("--color-foreground");
  return (
    <Stack
      screenOptions={{
        headerTitle: "",
        headerStyle: { backgroundColor: headerBg as string },
        headerTintColor: tintColor as string,
      }}
    />
  );
}
