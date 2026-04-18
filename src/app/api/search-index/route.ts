import { getAllPosts } from "@/utils/api";
import { NextResponse } from "next/server";
import { staticSearchItems, type SearchIndexItem } from "@/utils/site";

export async function GET() {
    const posts = await getAllPosts();
    const postItems: SearchIndexItem[] = posts.map((post) => ({
        title: post.frontmatter.title,
        href: `/blog/${post.slug}`,
        type: "post",
        description: post.frontmatter.description,
        date: post.frontmatter.date,
    }));

    return NextResponse.json([...staticSearchItems, ...postItems]);
}
