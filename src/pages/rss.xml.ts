import rss from '@astrojs/rss';
import { getCollection, type CollectionEntry } from 'astro:content';
import type { APIContext } from 'astro';

type Post = CollectionEntry<'posts'>;

export async function GET(context: APIContext){
    try {
        const blog = (await getCollection('posts')).filter(
            (post: Post) => !post.data.draft && !post.data.hiddenFromFeed && !post.data.hiddenFromRSS,
        )
        const items = [...blog].sort(
            (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime(),
        )

        return rss({
            title: 'Max Lewis Blog',
            description: 'Blogs from Max Lewis',
            site: context.site ?? 'https://blog.maxlewis.dev',
            items: items.map((item) => ({
                title: item.data.title,
                description: item.data.description,
                pubDate: item.data.pubDate,
                link: `/post/${item.data.slug}`,
            }))
        })
    } catch (e) {
        console.error(e)
        return new Response('Error generating RSS feed', { status: 500 })
    }
}