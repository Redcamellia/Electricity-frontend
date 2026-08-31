import Button from "@/src/components/Button/Button";
import Post from "@/src/components/Post";
import { getConnectionInstance } from "@/src/utils/connection";
import { getItem } from "@/src/utils/utils";
import { router } from "expo-router";
import { setItem } from "expo-secure-store";
import React, { useEffect, useState } from "react";
import { Platform, Text, View } from "react-native";

type Post = {
  id: number;
  title: string;
  content: string;
  name: string;
};

const baseUrl =
  Platform.OS == "android" ? "http://10.0.2.2:3000/" : "http://localhost:3000/";
export default function index() {
  const [value, setValue] = useState<Post[]>([]);

  useEffect(() => {
    async function getPosts() {
      const conn = await getConnectionInstance();
      const email = getItem("email");
      const result = await conn.get(`${baseUrl}posts/by-email`, {
        params: {
          email: email,
        },
      });
      const postsvalue = result.data;
      setValue(postsvalue);
      return result;
    }
    getPosts();
  }, []);

  return (
    <View className="flex-1 bg-background gap-2 pt-8">
      <Button
        onPress={() => {
          setItem("token", "");
          setItem("email", "");
          router.dismissTo("/");
        }}
        className="bg-red-300 rounded-2xl w-24 self-center"
      >
        <Text className="text-center">log out</Text>
      </Button>
      {value.map((single) => {
        return (
          <Post
            key={single.title}
            title={single.title}
            content={single.content}
            username={single.name}
          />
        );
      })}
    </View>
  );
}
