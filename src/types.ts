import { z } from "zod";

// 1. body of ordering like buying or selling stocks
// 2. this is only bidding for selling and buying not actually buy or sell

export const OrderInputSchema = z.object({
  baseAsset: z.string(),
  quoteAsset: z.string(),
  price: z.number(),
  quantity: z.number(),
  side: z.enum(['buy', 'sell']),
  type: z.enum(['limit', 'market']),
  
  // kind: ioc means here either complete fully or reject it
  kind: z.enum(['ioc']).optional(),
});
