import { fetchHtml } from '@lib/fetch-html'
import { Quotefancy, QuotefancySchema } from './type'
import { getQuotes } from '@providers/quotefancy/get-quotes'

export const quotefancy = async (url: string): Promise<Quotefancy[]> => {
  if (!url) {
    throw new Error(`Error: Please provide a valid URL.`)
  }

  const html = await fetchHtml(url)

  const quotes = getQuotes(html)

  const result = QuotefancySchema.safeParse(quotes)

  if (!result.success) {
    const errors = result.error.issues
      .map((issue) => `Path: ${issue.path.join('.')} Issue: ${issue.message}`)
      .join('\n')
    console.log(errors)
    throw new Error(`Quotefancy data validation failed: \n${errors}`)
  }

  return result.data
}
