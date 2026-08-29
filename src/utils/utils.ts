import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { getLocalItem, setLocalItem } from "./localStorage";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function getItem(id: string): string {
  const item = getLocalItem(id);
  return item;
}
export function setItem(id: string, value: string) {
  setLocalItem(id, value);
}
