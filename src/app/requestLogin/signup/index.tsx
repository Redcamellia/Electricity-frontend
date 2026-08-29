import Button from "@/src/components/Button/Button";
import ElectricInput from "@/src/components/Button/ElectricInput";
import axios from "axios";
import { router } from "expo-router";
import React, { useState } from "react";
import { ActivityIndicator, Platform, Text, View } from "react-native";
export default function index() {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [nameValue, setNameValue] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [isButtonDisabled, setButtonDisabled] = useState<boolean>(false);

  const baseAddress =
    Platform.OS == "android"
      ? "http://10.0.2.2:3000/"
      : "http://localhost:3000/";

  return (
    <View className="flex-1 bg-background">
      <Text className="text-center text-3xl my-6 text-foreground ">
        sign up
      </Text>
      <View className="gap-4 mx-4">
        <ElectricInput
          inputMode="email"
          value={emailValue}
          placeholder="email"
          onChangeText={setEmailValue}
        />
        <ElectricInput
          inputMode="text"
          value={nameValue}
          placeholder="name"
          onChangeText={setNameValue}
        />
        <ElectricInput
          secureTextEntry={true}
          inputMode="text"
          textContentType="password"
          value={passwordValue}
          placeholder="password"
          onChangeText={setPasswordValue}
        />
      </View>
      <View className="flex-row justify-center my-8 gap-6">
        <Button
          disabled={isButtonDisabled}
          onPress={async () => {
            setButtonDisabled(true);
            setTimeout(() => {
              console.log("finished");
            }, 3000);
            const response = await axios.post(`${baseAddress}auth/signup`, {
              name: nameValue,
              email: emailValue,
              password: passwordValue,
            });
            setButtonDisabled(false);
            setResponse(response.data.email);
            setEmailValue("");
            setPasswordValue("");
            setNameValue("");
          }}
          className="px-4 rounded-xl"
        >
          <View className="flex-row">
            <Text className="text-2xl text-primary">sign up</Text>
            {isButtonDisabled && <ActivityIndicator size={"large"} />}
          </View>
        </Button>
        <Button
          onPress={() => {
            router.back();
          }}
          className="px-4 rounded-xl"
        >
          <Text className="text-2xl text-foreground text-accent">cancel</Text>
        </Button>
      </View>
      <Text className="text-xl text-primary text-center">{response}</Text>
    </View>
  );
}
