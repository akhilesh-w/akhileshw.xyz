import { MetadataRoute } from 'next'
import { getAllPosts } from '../utils/api'
import { siteConfig } from '@/utils/site'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Static routes
    const routes = [
        '',
        '/about',
        '/now',
        '/blog',
        '/logs',
        '/uses',
        '/bookshelf',
        '/guestbook',
        '/donate',
    ].map((route) => ({
        url: `${siteConfig.url}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Blog posts
    const allPosts = await getAllPosts()
    const posts = allPosts.map((post) => ({
        url: `${siteConfig.url}/blog/${post.slug}`,
        lastModified: post.frontmatter.date ? new Date(post.frontmatter.date) : new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }))

    return [...routes, ...posts]
}
