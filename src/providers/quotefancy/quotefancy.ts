import { fetchHtml } from '@lib/fetch-html'
import { Quote as Quotefancy, quotesSchema } from '../../types'
import { getQuotes } from './get-quotes'

export const quotefancy = async (url: string): Promise<Quotefancy[]> => {
  if (!url) {
    throw new Error(`Error: Please provide a valid URL.`)
  }

  const html = await fetchHtml(url)

  const quotes = getQuotes(html)

  const result = quotesSchema.safeParse(quotes)

  if (!result.success) {
    const errors = result.error.issues
      .map((issue) => `Path: ${issue.path.join('.')} Issue: ${issue.message}`)
      .join('\n')
    console.log(errors)
    throw new Error(`Quotefancy data validation failed: \n${errors}`)
  }

  return result.data
}
