import React from "react";
import { Pressable, PressableProps, Text } from "react-native";

export default function Button({ onPress }: PressableProps) {
  return (
    <Pressable onPress={onPress}>
      <Text>Button</Text>
    </Pressable>
  );
}
