import { load } from 'cheerio'
import { Azquotes } from './type'

export const getQuotes = (html: string): Azquotes[] => {
  const $ = load(html)
  const quotes: Azquotes[] = []

  $('ul.list-quotes li').each((_, elem) => {
    const quote = $(elem).find('p a.title').text().trim()
    const author = $(elem).find('div.author a').text().trim()
    const imageUrl =
      $(elem).find('a.zoom-cur img').attr('data-src') ||
      $(elem).find('a.zoom-cur img').attr('src')
    const quoteUrl = $(elem).find('p a.title').attr('href')

    const baseImageUrl = 'https://www.azquotes.com'
    const baseQuoteUrl = 'https://www.azquotes.com'

    if (quote)
      quotes.push({
        quote,
        author,
        image: imageUrl ? `${baseImageUrl}${imageUrl}` : '',
        url: quoteUrl ? `${baseQuoteUrl}${quoteUrl}` : ''
      })
  })

  return quotes
}
