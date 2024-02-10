import { z } from 'zod'

export const quoteSchema = z.object({
  quote: z.string(),
  author: z.string().optional(),
  url: z.string().url().optional(),
  image: z.string().optional()
})

export const QuotefancySchema = quoteSchema.array()

export type Quotefancy = z.infer<typeof quoteSchema>
