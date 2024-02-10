import { z } from 'zod'
import { quoteSchema } from './../quotefancy/type'

const azquotesSchema = quoteSchema.partial({
  image: true
})

export const AzquotesSchema = azquotesSchema.array()

export type Azquotes = z.infer<typeof azquotesSchema>
