import { z } from 'zod'

export const quoteSchema = z.object({
  quote: z.string(),
  author: z.string().optional(),
  url: z.string().url().optional(),
  image: z.string().optional()
})

export const quotesSchema = z.array(quoteSchema)

export type Quote = z.infer<typeof quoteSchema>
