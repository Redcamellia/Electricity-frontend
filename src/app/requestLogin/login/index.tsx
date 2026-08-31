import Button from "@/src/components/Button/Button";
import ElectricInput from "@/src/components/ElectricInput";
import { setItem } from "@/src/utils/utils";
import axios from "axios";
import { router } from "expo-router";
import React, { useState } from "react";
import { Platform, Text, View } from "react-native";

export default function index() {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const baseUrl =
    Platform.OS == "android"
      ? "http://10.0.2.2:3000/"
      : "http://localhost:3000/";
  return (
    <View className="bg-background flex-1">
      <Text className="text-foreground text-2xl text-center capitalize my-4">
        login
      </Text>
      <View className="gap-6 mx-4">
        <ElectricInput
          placeholder="email"
          value={emailValue}
          onChangeText={setEmailValue}
        />
        <ElectricInput
          secureTextEntry={true}
          textContentType="password"
          placeholder="password"
          value={passwordValue}
          onChangeText={setPasswordValue}
        />
      </View>
      <View className="flex-row justify-center my-8 gap-4">
        <Button
          onPress={async () => {
            const response = await axios.post(`${baseUrl}auth/login`, {
              email: emailValue,
              password: passwordValue,
            });
            if (response.data.token) {
              setToken(response.data.token);
              setItem("token", response.data.token);
              setItem("email", emailValue);
              router.dismiss(1);
              router.replace("/user");
            }
          }}
          className="rounded-3xl"
        >
          <Text className="text-2xl text-primary mx-6 my-1 ">Login</Text>
        </Button>
        <Button
          onPress={() => {
            router.back();
          }}
          className="rounded-3xl bg-red-200"
        >
          <Text className="text-2xl text-primary mx-6 my-1 ">Cancel</Text>
        </Button>
      </View>
    </View>
  );
}
