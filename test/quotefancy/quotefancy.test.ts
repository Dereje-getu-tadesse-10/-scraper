import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { getQuotes } from '../../src/providers/quotefancy/get-quotes'
import { mock } from './mock'

describe('Quotefancy scraper', () => {
  it('Should parse quotes from HTML', () => {
    const quotes = getQuotes(mock)
    expect(Array.isArray(quotes)).toBe(true)
    expect(quotes).toHaveLength(1)
    expect(quotes[0]).toHaveProperty(
      'quote',
      'Happiness and confidence are the prettiest things you can wear.'
    )
    expect(quotes[0]).toHaveProperty(
      'url',
      'https://quotefancy.com/quote/76125/Taylor-Swift-Happiness-and-confidence-are-the-prettiest-things-you-can-wear'
    )
    expect(quotes[0]).toHaveProperty(
      'image',
      'https://quotefancy.com/media/wallpaper/800x450/45765-Taylor-Swift-Quote-Happiness-and-confidence-are-the-prettiest.jpg'
    )
  })
})
