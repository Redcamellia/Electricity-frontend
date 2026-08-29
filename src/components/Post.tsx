import React from "react";
import { Text, View } from "react-native";

export default function Post({
  title,
  content,
  username,
}: {
  title: string;
  content: string;
  username: string;
}) {
  return (
    <View className="w-[80%] w-max-[480px] bg-border self-center py-6 px-4 rounded-2xl shadow-2xl">
      <View className="mb-4 flex-row gap-6 justify-between items-center">
        <View className="flex-row gap-2 items-center">
          <View className="w-12 h-12 rounded-full bg-amber-300 border-1 border-amber-50"></View>
          <Text className="text-2xl text-foreground">{username}</Text>
        </View>
        <Text className="text-2xl text-foreground">{title}</Text>
      </View>
      <Text className="text-xl text-foreground">{content}</Text>
    </View>
  );
}
