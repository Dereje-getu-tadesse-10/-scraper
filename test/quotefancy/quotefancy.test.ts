import { describe, expect, it } from 'vitest'
import { getQuotes } from '../../src/providers/quotefancy/get-quotes'
import {
  mock,
  mockEmptyHtml,
  mockHtmlWithoutLinkAndImage,
  mockMalformedHtml
} from './mock'

describe('Quotefancy scraper', () => {
  it('Should parse quotes from HTML', () => {
    const quotes = getQuotes(mock)
    expect(quotes).toBeInstanceOf(Array)
    expect(quotes).toHaveLength(1)
    expect(quotes[0]).toHaveProperty(
      'quote',
      'Happiness and confidence are the prettiest things you can wear.'
    )
    expect(quotes[0]).toHaveProperty('author', 'Taylor Swift')
    expect(quotes[0]).toHaveProperty(
      'url',
      'https://quotefancy.com/quote/76125/Taylor-Swift-Happiness-and-confidence-are-the-prettiest-things-you-can-wear'
    )
    expect(quotes[0]).toHaveProperty(
      'image',
      'https://quotefancy.com/media/wallpaper/800x450/45765-Taylor-Swift-Quote-Happiness-and-confidence-are-the-prettiest.jpg'
    )
  })
  it('Should parse HTML and extract data if any is found', () => {
    const quotes = getQuotes(mockEmptyHtml)
    expect(quotes).toBeInstanceOf(Array)
    expect(quotes).toHaveLength(0)
  })
  it('Should parse HTML and not find image and href', () => {
    const quotes = getQuotes(mockHtmlWithoutLinkAndImage)
    expect(quotes).toBeInstanceOf(Array)
    expect(quotes).toHaveLength(1)
    expect(quotes[0]).toHaveProperty('quote')
    expect(quotes[0]).toHaveProperty('url', '')
    expect(quotes[0]).toHaveProperty('image', '')
  })
  it('Should parse HTML malformed', () => {
    const quotes = getQuotes(mockMalformedHtml)
    expect(quotes).toBeInstanceOf(Array)
    expect(quotes).toHaveLength(0)
  })
})
