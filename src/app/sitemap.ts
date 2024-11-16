import { getPosts } from '@/app/utils'
import { baseURL } from '@/app/resources'
import { routing } from '@/i18n/routing'

export default async function sitemap() {

    const locales = routing.locales;

    let blogs = locales.flatMap((locale) => 
        getPosts(['src', 'app', '[locale]', 'blog', 'posts', locale]).map((post) => ({
            url: `${baseURL}/${locale}/blog/${post.slug}`,
            lastModified: post.metadata.publishedAt,
        }))
    );

    let myprojects = locales.flatMap((locale) => 
        getPosts(['src', 'app', '[locale]', 'myprojects', 'projects', locale]).map((post) => ({
            url: `${baseURL}/${locale}/myprojects/${post.slug}`,
            lastModified: post.metadata.publishedAt,
        }))
    );

    let routes = locales.flatMap((locale)=> 
        ['', '/blog', '/myprojects'].map((route) => ({
            url: `${baseURL}/${locale}${route}`,
            lastModified: new Date().toISOString().split('T')[0],
        }))
    );

    return [...routes, ...blogs, ...myprojects]
}