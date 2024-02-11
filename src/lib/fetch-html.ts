let fetchFn

if (typeof fetch === 'function') {
  fetchFn = fetch
} else {
  fetchFn = require('node-fetch')
}

export const fetchHtml = async (url: string): Promise<string> => {
  const response = await fetchFn(url)
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`)
  }
  return await response.text()
}
