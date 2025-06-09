
const BASE_URL = process.env.NEXT_PUBLIC_API_URL!
const API_KEY   = process.env.NEXT_PUBLIC_API_KEY!

export async function apiClient<T = any>(
  path: string,
  init?: RequestInit & {

    next?: {
      revalidate?: number | false
      tags?: string[]
    }
    cache?: RequestCache
  }
): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...init,
    headers: {
      'x-api-key': API_KEY,
    
      ...(init?.headers ?? {}),
    },
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`API Error ${res.status}: ${text || res.statusText}`)
  }

  return (await res.json()) as T
}
