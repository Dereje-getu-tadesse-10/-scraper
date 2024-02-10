import { z } from 'zod'
import { quoteSchema } from '@providers/quotefancy'

const azquotesSchema = quoteSchema.partial({
  image: true
})

export const AzquotesSchema = azquotesSchema.array()

export type Azquotes = z.infer<typeof azquotesSchema>
