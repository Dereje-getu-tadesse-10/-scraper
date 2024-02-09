import { load } from 'cheerio'
import { Quotefancy } from 'types'

export const getQuotes = (html: string): Quotefancy[] => {
  const $ = load(html)
  const quotes: Quotefancy[] = []

  $('.q-container').each((_, quoteContainer) => {
    const $quoteContainer = $(quoteContainer)
    const $quoteLink = $quoteContainer.find('a.quote-a')

    const quote = $quoteLink.text().trim()
    const url = $quoteLink.attr('href') ?? ''

    const $wallpaperImg = $quoteContainer.prev('.wallpaper').find('img')
    const image =
      $wallpaperImg.attr('src') ?? $wallpaperImg.attr('data-original') ?? ''

    if (quote && url && image) {
      quotes.push({ quote, url, image })
    }
  })

  return quotes
}
