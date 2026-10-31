import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
export const accounts=sqliteTable('accounts',{id:text('id').primaryKey(),owner:text('owner').notNull(),email:text('email').notNull().unique(),salt:text('salt').notNull(),hash:text('hash').notNull(),created:text('created').notNull()});
export const sessions=sqliteTable('sessions',{id:text('id').primaryKey(),account:text('account').notNull(),owner:text('owner').notNull(),expires:integer('expires').notNull()});
export const profiles=sqliteTable('profiles',{account:text('account').primaryKey(),data:text('data').notNull()});
export const measurements=sqliteTable('measurements',{id:text('id').primaryKey(),account:text('account').notNull(),date:text('date').notNull(),data:text('data').notNull()});
export const attempts=sqliteTable('attempts',{id:text('id').primaryKey(),count:integer('count').notNull(),reset:integer('reset').notNull()});
