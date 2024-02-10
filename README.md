# Stayc

### Compatibility

stayc currently does not work in the edge runtime environments.

### Introduction

stayc is a simple scraper that gets quotes from websites like quotefancy and azquotes for now. You can easily get quotes by giving stayc the URL of a quotes page. For example, for quotes from Taylor Swift on azquotes, just use the URL `https://www.azquotes.com/author/14371-Taylor_Swift`. It's the same for quotefancy. stayc works with both ESM and CJS modules, making it useful for different JavaScript projects. More quote sites will be added in the future.

### Installation

```bash
npm install stayc
or
pnpm add stayc
```

### Usage

After installing stayc, you can start scraping quotes from supported sites like quotefancy and azquotes. Here’s how to use stayc in your JavaScript projects:

First, import stayc into your project file. You can use stayc with both module systems, ESM and CJS.

#### for ESM modules

```js
import { quotefancy, azquotes } from 'stayc'
```

#### for CJS modules

```js
const { quotefancy, azquotes } = require('stayc')
```

#### Example with azquotes:

```js
async function fetchAzquotes() {
  try {
    const quotes = await azquotes(
      'https://www.azquotes.com/author/14371-Taylor_Swift'
    )
    console.log(quotes)
  } catch (error) {
    console.error('Error fetching quotes:', error)
  }
}

fetchAzquotes()
```

#### Example with quotefancy:

```js
async function fetchQuotefancy() {
  try {
    const quotes = await quotefancy(
      'https://www.quotefancy.com/author/Taylor-Swift'
    )
    console.log(quotes)
  } catch (error) {
    console.error('Error fetching quotes:', error)
  }
}

fetchQuotefancy()
```

### Usage with TypeScript

You can import type of `quotefancy` and `azquotes` from stayc in TypeScript projects.

```ts
import { azquotes, Azquotes } from 'stayc'
// or
import { quotefancy, Quotefancy } from 'stayc'
```

When you import `Quotefancy` or `Azquotes`, you'll get the type of `quotefancy` or `azquotes` respectively.

### Response

When using stayc to fetch quotes from `azquotes` or `quotefancy`, the response will be an array of objects, each representing a quote. Here's what each object contains:

- `quote` (string): The quote.
- `author` (string): The author.
- `url` (string): The URL of the quote.
- `image` (string): The date of the quote.

Azquotes Example Response

```json
[
  {
    "quote": "People are going to judge you anyway, so you might as well do what you want.",
    "author": "Taylor Swift",
    "url": "https://www.azquotes.com/quote/879492",
    "image": "https://www.azquotes.com/vangogh-image-quotes/87/94/Quotation-Taylor-Swift-People-are-going-to-judge-you-anyway-so-you-might-87-94-92.jpg"
  }
  // {...}
]
```

Quotefancy Example Response

```json
[
  {
    "quote": "Just be yourself, there is no one better.",
    "author": "Taylor Swift",
    "url": "https://quotefancy.com/quote/4237/Taylor-Swift-Just-be-yourself-there-is-no-one-better",
    "image": "https://quotefancy.com/media/wallpaper/800x450/6361203-Taylor-Swift-Quote-Just-be-yourself-there-is-no-one-better.jpg"
  }
  //{...}
]
```

### Features

- Scrape quotes from `quotefancy` and `azquotes`.
- Supports both ESM and CJS module systems.
- Easy to integrate into JavaScript projects.

### License

`stayc` is released under the MIT License. See the LICENSE file in the project repository for more details.

### Disclaimer

Please note that stayc is developed for educational purposes only. It is intended to demonstrate web scraping techniques and provide a tool for learning and experimentation. Users should ensure they comply with the terms of service and copyright laws of any website they scrape. Always use stayc responsibly and ethically, and never use it to access or distribute content without permission.
