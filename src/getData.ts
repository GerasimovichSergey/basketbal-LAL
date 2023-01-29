export async function getData(url: string, options: {}) {
  const response = await fetch(url, options);

  if (response.ok) {
    return response.json();
  }
}