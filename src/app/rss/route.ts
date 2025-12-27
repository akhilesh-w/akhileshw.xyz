import { Feed } from 'feed'
import { getAllPosts } from '../../utils/api'
import { NextResponse } from 'next/server'

export async function GET() {
  const posts = await getAllPosts()
  const siteURL = 'https://akhileshw.xyz'
  const author = {
    name: 'Akhilesh Waghmare',
    email: 'hey@akhileshw.xyz',
    link: siteURL,
  }

  const feed = new Feed({
    title: 'Akhilesh Waghmare',
    description: 'Personal blog of Akhilesh Waghmare',
    id: siteURL,
    link: siteURL,
    language: 'en',
    image: `${siteURL}/favicon.ico`,
    favicon: `${siteURL}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Akhilesh Waghmare`,
    updated: new Date(),
    feedLinks: {
      rss2: `${siteURL}/rss`,
    },
    author,
  })

  posts.forEach((post) => {
    const url = `${siteURL}/blog/${post.slug}`
    feed.addItem({
      title: post.frontmatter.title,
      id: url,
      link: url,
      description: post.frontmatter.description,
      content: post.content,
      author: [author],
      contributor: [author],
      date: new Date(post.frontmatter.date),
    })
  })

  return new NextResponse(feed.rss2(), {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=0, s-maxage=3600',
      'X-Content-Type-Options': 'nosniff',
    },
  })
}
