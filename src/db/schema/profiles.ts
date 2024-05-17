import { serial, text, pgTable, pgSchema, uuid } from "drizzle-orm/pg-core";

// Supabase auth schema
const authSchema = pgSchema('auth');
const users = authSchema.table('users', {
	id: serial('id').primaryKey(),
});

export const profiles = pgTable("profiles", {
  id: serial("id").primaryKey(),  // maybe reference
  user_id: uuid('user_id').notNull().references(() => users.id),
  firstName: text("first_name"),
  lastName: text("last_name"),
});

export type User = typeof profiles.$inferInsert;