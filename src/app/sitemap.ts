import { MetadataRoute } from 'next'
import { getAllPosts } from '../utils/api'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const siteUrl = 'https://akhileshw.xyz'

    // Static routes
    const routes = [
        '',
        '/about',
        '/now',
        '/blog',
        '/uses',
        '/bookshelf',
        '/guestbook',
    ].map((route) => ({
        url: `${siteUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Blog posts
    const allPosts = await getAllPosts()
    const posts = allPosts.map((post) => ({
        url: `${siteUrl}/blog/${post.slug}`,
        lastModified: post.frontmatter.date ? new Date(post.frontmatter.date) : new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }))

    return [...routes, ...posts]
}
