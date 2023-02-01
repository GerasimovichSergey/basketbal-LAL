export function getStorageData(storage: string) {
  const data = localStorage.getItem(storage);

  return data;
}