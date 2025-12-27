import { MetadataRoute } from 'next'
import { getAllPostSlugs } from '../utils/api'

export default function sitemap(): MetadataRoute.Sitemap {
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
    const posts = getAllPostSlugs().map((post) => ({
        url: `${siteUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }))

    return [...routes, ...posts]
}
