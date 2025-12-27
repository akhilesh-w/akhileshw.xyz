"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function getGuestbookMessages() {
    try {
        const data = await sql`
      SELECT id, name, message, created_at
      FROM guestbook
      ORDER BY created_at DESC
    `;
        return data.rows;
    } catch (error) {
        console.error("Failed to fetch guestbook messages:", error);
        return [];
    }
}

export async function signGuestbook(formData: FormData) {
    const name = formData.get("name") as string;
    const message = formData.get("message") as string;

    if (!name || !message) {
        return { error: "Name and message are required" };
    }

    try {
        await sql`
      INSERT INTO guestbook (name, message)
      VALUES (${name}, ${message})
    `;

        revalidatePath("/guestbook");
        return { success: true };
    } catch (error) {
        console.error("Failed to sign guestbook:", error);
        return { error: "Failed to save your message. Please try again later." };
    }
}
