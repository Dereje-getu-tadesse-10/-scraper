import { z } from 'zod'

const QuotefancyObjectSchema = z.object({
  quote: z.string(),
  url: z.string().url().optional(),
  image: z.string().optional()
})

export const QuotefancySchema = QuotefancyObjectSchema.array()

export type Quotefancy = z.infer<typeof QuotefancyObjectSchema>
