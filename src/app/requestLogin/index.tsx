import Button from "@/src/components/Button/Button";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function index() {
  return (
    <View className="flex-1 bg-background">
      <Text className="text-center text-2xl text-foreground my-8">
        please log in to your account
      </Text>
      <View className="flex-row gap-4 justify-center">
        <Button className="rounded-2xl px-4">
          <Text className="text-primary text-xl ">Login</Text>
        </Button>
        <Button
          onPress={() => {
            router.navigate("/requestLogin/signup");
          }}
          className="rounded-2xl px-4"
        >
          <Text className="text-primary text-xl  ">Sign up</Text>
        </Button>
      </View>
    </View>
  );
}
