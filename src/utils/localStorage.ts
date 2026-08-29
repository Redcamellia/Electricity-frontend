export function getLocalItem(id: string): string {
  const result = localStorage.getItem(id);
  if (!result) {
    return "";
  }
  return result;
}

export function setLocalItem(id: string, value: string) {
  localStorage.setItem(id, value);
}
