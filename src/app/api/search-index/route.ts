import { getAllPosts } from "@/utils/api";
import { NextResponse } from "next/server";

export async function GET() {
    const posts = await getAllPosts();
    const searchIndex = posts.map((post) => ({
        title: post.frontmatter.title,
        slug: post.slug,
        date: post.frontmatter.date,
    }));

    return NextResponse.json(searchIndex);
}
