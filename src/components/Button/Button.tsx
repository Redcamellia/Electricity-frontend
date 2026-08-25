import React from "react";

import { cn } from "@/src/utils/utils";
import { Pressable } from "react-native";
import { ButtonProps } from "./Button.types";

export default function Button({ onPress, children, className }: ButtonProps) {
  return (
    <Pressable
      className={cn("border-1 border-border bg-card p-2", className)}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
}
