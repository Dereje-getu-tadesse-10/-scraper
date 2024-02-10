import { z } from 'zod'
import { quoteSchema } from '@providers/quotefancy'

const azquoteSchema = quoteSchema.partial({
  image: true
})

export const AzquoteSchema = azquoteSchema.array()

export type Azquotes = z.infer<typeof azquoteSchema>
