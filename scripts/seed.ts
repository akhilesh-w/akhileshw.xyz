import { config } from 'dotenv';
config({ path: '.env.local' });
import { sql } from '@vercel/postgres';

async function seed() {
    try {
        const createTable = await sql`
      CREATE TABLE IF NOT EXISTS guestbook (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

        console.log(`Created "guestbook" table`);

        return {
            createTable,
        };
    } catch (error) {
        console.error('Error seeding database:', error);
        throw error;
    }
}

seed().catch((err) => {
    console.error('An error occurred while attempting to seed the database:', err);
});
