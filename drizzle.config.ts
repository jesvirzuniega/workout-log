import type { Config } from "drizzle-kit";
export default {
  schemaFilter: ['public'],
  schema: "./src/db/schema/*",
  out: "./supabase/migrations",
} satisfies Config;