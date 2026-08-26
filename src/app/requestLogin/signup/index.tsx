import Button from "@/src/components/Button/Button";
import axios from "axios";
import { router } from "expo-router";
import React, { useState } from "react";
import { ColorValue, Platform, Text, TextInput, View } from "react-native";
import { useCSSVariable } from "uniwind";
export default function index() {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [nameValue, setNameValue] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const placeholderColor = useCSSVariable("--color-primary");
  const inputClassNames =
    "bg-card border-1 border-border text-2xl px-4 rounded-3xl text-foreground ";

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
        <TextInput
          placeholderTextColor={placeholderColor as ColorValue}
          className={inputClassNames}
          inputMode="email"
          value={emailValue}
          placeholder="email"
          onChangeText={setEmailValue}
        />
        <TextInput
          placeholderTextColor={placeholderColor as ColorValue}
          className={inputClassNames}
          inputMode="text"
          value={nameValue}
          placeholder="name"
          onChangeText={setNameValue}
        />
        <TextInput
          placeholderTextColor={placeholderColor as ColorValue}
          className={inputClassNames}
          inputMode="text"
          textContentType="password"
          value={passwordValue}
          placeholder="password"
          onChangeText={setPasswordValue}
        />
      </View>
      <View className="flex-row justify-center my-8 gap-6">
        <Button
          onPress={async () => {
            const response = await axios.post(`${baseAddress}auth/signup`, {
              name: nameValue,
              email: emailValue,
              password: passwordValue,
            });
            setResponse(response.data.email);
            setEmailValue("");
            setPasswordValue("");
            setNameValue("");

            console.log(response);
          }}
          className="px-4 rounded-xl"
        >
          <Text className="text-2xl text-primary">sign up</Text>
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
