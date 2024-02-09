import { fetchHtml } from '@lib/fetch-html'
import { Quotefancy } from 'types'
import { getQuotes } from './get-quotes'

export const quotefancy = async (url: string): Promise<Quotefancy[]> => {
  const html = await fetchHtml(url)
  return getQuotes(html)
}
