import { fetchHtml } from '@lib/fetch-html'
import { Quotefancy } from 'types'
import { getQuotes } from '@providers/quotefancy/get-quotes'

export const quotefancy = async (url: string): Promise<Quotefancy[]> => {
  const html = await fetchHtml(url)
  return getQuotes(html)
}
