import { getItem, setItem } from "expo-secure-store";

export function getLocalItem(id: string): string {
  const result = getItem(id);
  if (!result) {
    return "";
  }
  return result;
}

export function setLocalItem(id: string, value: string) {
  setItem(id, value);
}
