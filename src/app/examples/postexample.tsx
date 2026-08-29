import Post from "@/src/components/Post";
import React from "react";
import { View } from "react-native";

export default function postexample() {
  return (
    <View className="flex-1 bg-background py-8 gap-2">
      <Post
        title="first post"
        content="this is just a text for showcasing the post component im sorry if its not really helpful"
        username="Ehsan"
      />
      <Post
        title="first post"
        content="this is just a text for showcasing the post component im sorry if its not really helpful"
        username="Ehsan"
      />
      <Post
        title="first post"
        content="this is just a text for showcasing the post component im sorry if its not really helpful"
        username="Ehsan"
      />
      <Post
        title="first post"
        content="this is just a text for showcasing the post component im sorry if its not really helpful"
        username="Ehsan"
      />
    </View>
  );
}
