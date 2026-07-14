import type { MetadataRoute } from "next";
import { areas } from "@/content/areas";
import { posts } from "@/content/posts";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/sobre`, changeFrequency: "yearly", priority: 0.8 },
    {
      url: `${site.url}/areas-de-atuacao`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    { url: `${site.url}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${site.url}/contato`, changeFrequency: "yearly", priority: 0.9 },
  ];

  const areaPages: MetadataRoute.Sitemap = areas.map((area) => ({
    url: `${site.url}/areas-de-atuacao/${area.slug}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticPages, ...areaPages, ...postPages];
}
