import { router } from "expo-router";
import { Text, View } from "react-native";
import { Uniwind } from "uniwind";
import Button from "../components/Button/Button";

export default function Index() {
  Uniwind.setTheme("ocean");
  return (
    <View className="border-1 flex-1  border-border bg-background">
      <Text className="text-center text-primary text-2xl">Welcome</Text>
      <Button
        onPress={() => {
          router.navigate("/requestLogin");
        }}
        className="max-w-[50%] self-center rounded-2xl"
      >
        <Text className="text-xl text-center text-primary">Proceed</Text>
      </Button>
    </View>
  );
}
