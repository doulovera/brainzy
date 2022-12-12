export const get = async (
  { url, params }: { url: string, params?: Record<string, string> },
) => {
  try {
    const urlParams = new URLSearchParams(params);
    const response = await fetch(`${url}?${urlParams}`);

    return response.json();
  } catch (error) {
    console.error(error);
    throw new Error('Something went wrong: ');
  }
};

export const post = async (
  { url, body }: { url: string, body: Record<string, string> },
) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
  });
  return response.json();
};
