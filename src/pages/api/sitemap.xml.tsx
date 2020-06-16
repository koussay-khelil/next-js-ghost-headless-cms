// Import built-in types for API routes
        import { NextApiRequest, NextApiResponse } from 'next';
        import { SitemapStream, streamToPromise, EnumChangefreq } from 'sitemap';
        import { createGzip } from 'zlib';
        import {getPosts} from '../../api/ghost'
        export default async (req: NextApiRequest, res: NextApiResponse) => {
        if (!res) return {};
        try {
        // Set response header
        res.setHeader('content-type', 'application/xml');
        res.setHeader('Content-Encoding', 'gzip');

        // A Transform for turning a Readable stream of either SitemapItemOptions or url strings into a Sitemap.
        // The readable stream it transforms must be in object mode.
        const smStream = new SitemapStream({
        hostname: 'https://gomytech.gomycode.co',
        });

        const pipeline = smStream.pipe(createGzip());
        // Add any static entries here
        smStream.write({ url: '/', lastmod: process.env.siteUpdatedAt, changefreq: EnumChangefreq.DAILY });
        smStream.write({ url: '/tech-it-easy', lastmod: process.env.siteUpdatedAt, changefreq: EnumChangefreq.DAILY });
        smStream.write({ url: '/inside-gomycode', lastmod: process.env.siteUpdatedAt, changefreq: EnumChangefreq.DAILY });
        smStream.write({ url: '/meet-a-founder', lastmod: process.env.siteUpdatedAt, changefreq: EnumChangefreq.DAILY });
        smStream.write({ url: '/en-profondeur', lastmod: process.env.siteUpdatedAt, changefreq: EnumChangefreq.DAILY });
        smStream.write({ url: '/around-gomytech', lastmod: process.env.siteUpdatedAt, changefreq: EnumChangefreq.DAILY });
        smStream.write({ url: '/random-mirror', lastmod: process.env.siteUpdatedAt, changefreq: EnumChangefreq.DAILY });
        smStream.write({ url: '/blog', lastmod: process.env.siteUpdatedAt, changefreq: EnumChangefreq.DAILY });
        // E.g. we create a sitemap.xml for articles
        // Set articles change frequencey is weekly
        const articles = await getPosts();
        articles.map(article => {
        smStream.write({
        url: `/${article.slug}`,
        lastmod: article.updatedAt,
        changefreq: EnumChangefreq.DAILY,
        });
        });
        smStream.end();

        // cache the response
        // streamToPromise.then(sm => sitemap = sm)
        streamToPromise(pipeline);
        // stream the response
        pipeline.pipe(res).on('error', e => {
        throw e;
        });
        } catch (e) {
        res.status(500).end();
        }
        };
