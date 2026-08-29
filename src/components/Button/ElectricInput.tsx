import { cn } from "@/src/utils/utils";
import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { useCSSVariable } from "uniwind";

export default function ElectricInput({
  className,
  inputMode,
  value,
  placeholder,
  secureTextEntry,
  onChangeText,
}: TextInputProps) {
  const placeholderColor = useCSSVariable("--color-primary");
  return (
    <TextInput
      placeholderTextColor={placeholderColor as string}
      className={cn(
        "bg-card border-1 border-border text-2xl px-4 rounded-3xl text-foreground ",
        className,
      )}
      secureTextEntry={secureTextEntry}
      inputMode={inputMode}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
    ></TextInput>
  );
}
