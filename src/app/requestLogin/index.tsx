import Button from "@/src/components/Button/Button";
import { getItem } from "@/src/utils/utils";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

export default function index() {
  useEffect(() => {
    const token = getItem("token");
    if (token) {
      console.log(`token is available : ${token}`);
      router.replace("/user");
    }
  }, []);
  console.log("token: ", getItem("token"));
  console.log("email: ", getItem("email"));
  return (
    <View className="flex-1 bg-background">
      <Text className="text-center text-2xl text-foreground my-8">
        please log in to your account
      </Text>
      <View className="flex-row gap-4 justify-center">
        <Button
          onPress={() => {
            router.navigate("/requestLogin/login");
          }}
          className="rounded-2xl px-4"
        >
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
