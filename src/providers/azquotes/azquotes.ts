import { fetchHtml } from '@lib/fetch-html'
import { Azquotes, AzquoteSchema } from './type'
import { getQuotes } from '@providers/azquotes/get-quotes'

export const azquotes = async (url: string): Promise<Azquotes[]> => {
  if (!url) {
    throw new Error(`Error: Please provide a valid URL.`)
  }

  const html = await fetchHtml(url)

  const quotes = getQuotes(html)

  const result = AzquoteSchema.safeParse(quotes)

  if (!result.success) {
    const errors = result.error.issues
      .map((issue) => `Path: ${issue.path.join('.')} Issue: ${issue.message}`)
      .join('\n')
    console.log(errors)
    throw new Error(`Azquote data validation failed: \n${errors}`)
  }

  return result.data
}
