import Post from "@/src/components/Post";
import { getConnectionInstance } from "@/src/utils/connection";
import { getItem } from "@/src/utils/utils";
import React, { useEffect, useState } from "react";
import { Platform, View } from "react-native";

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
      console.log("i am requesting the backend");
      const result = await conn.get(`${baseUrl}posts/by-email`, {
        params: {
          email: email,
        },
      });
      const postsvalue = result.data;
      console.log("i got the posts from backend");
      setValue(postsvalue);
      console.log(postsvalue);
      return result;
    }
    getPosts();
  }, []);

  return (
    <View className="flex-1 bg-background gap-4 pt-8">
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
