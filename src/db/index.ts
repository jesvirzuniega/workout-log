import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
const connectionString = process.env.NEXT_PUBLIC_SUPABASE_URL!

export function createDbClient() {
  // Disable prefetch as it is not supported for "Transaction" pool mode 
  const client = postgres(connectionString, { prepare: false })
  return drizzle(client)
}
