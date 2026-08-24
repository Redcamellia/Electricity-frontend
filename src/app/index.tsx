import { Text, View } from "react-native";
import { Uniwind } from "uniwind";

export default function Index() {
  Uniwind.setTheme("ocean");
  return (
    <View className="border-1 flex-1  border-border bg-background">
      <Text className="text-center text-primary text-2xl">
        Edit app/index.tsx to edit this screen.
      </Text>
    </View>
  );
}
