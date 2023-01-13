export const get = async (
  { url, params }: { url: string, params?: Record<string, string> },
) => {
  try {
    const urlParams = new URLSearchParams(params)
    const response = await fetch(`${url}?${urlParams}`)

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error)
    }
    return data
  } catch (error) {
    console.error(error)
    throw new Error((error as Error).message)
  }
}

export const post = async (
  { url, body }: { url: string, body: Record<string, string> },
) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
  })
  return response.json()
}
