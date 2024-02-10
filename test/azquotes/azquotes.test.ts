import { describe, expect, it } from 'vitest'
import { getQuotes } from '../../src/providers/azquotes/get-quotes'
import { mock, mockHtmlWithoutLinkAndImage } from './mock'

describe('Azquotes scraper', () => {
  it('Should parse quotes from HTML', () => {
    const quotes = getQuotes(mock)
    expect(quotes).toBeInstanceOf(Array)
    expect(quotes).toHaveLength(1)
    expect(quotes[0]).toHaveProperty(
      'quote',
      'You are the only one who gets to decide what you will be remembered for.'
    )
    expect(quotes[0]).toHaveProperty('author', 'Taylor Swift')
    expect(quotes[0]).toHaveProperty(
      'url',
      'https://www.azquotes.com/quote/1028384'
    )
    expect(quotes[0]).toHaveProperty(
      'image',
      'https://www.azquotes.com/vangogh-image-quotes/102/83/Quotation-Taylor-Swift-You-are-the-only-one-who-gets-to-decide-what-102-83-84.jpg'
    )
  })
  it('Should parse HTML and not find image and href', () => {
    const quotes = getQuotes(mockHtmlWithoutLinkAndImage)
    expect(quotes).toBeInstanceOf(Array)
    expect(quotes).toHaveLength(1)
    expect(quotes[0]).toHaveProperty('quote')
    expect(quotes[0]).toHaveProperty('author')
    expect(quotes[0]).toHaveProperty('url', '')
    expect(quotes[0]).toHaveProperty('image', '')
  })
})
