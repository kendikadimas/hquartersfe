const API = '/wp-json/wp/v2';

async function get(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`WP API error ${res.status}`);
  return res.json();
}

export function stripHtml(html) {
  const doc = new DOMParser().parseFromString(html || '', 'text/html');
  const text = doc.body.textContent || '';
  return text
    .replace(/\[\s*(\.{2,}|…|&hellip;)\s*\]/gi, '...')
    .replace(/\[\.\.\.\]/g, '...')
    .replace(/\[\.\.\]/g, '...')
    .replace(/\[…\]/g, '...')
    .trim();
}

export function cleanElementorContent(html) {
  const doc = new DOMParser().parseFromString(html || '', 'text/html');
  const containers = doc.querySelectorAll('.elementor-widget-container');
  if (containers.length) {
    return Array.from(containers).map((c) => c.innerHTML).join('\n');
  }
  return html;
}

export function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  } catch {
    return iso;
  }
}

export function estimateReadTime(html) {
  const words = stripHtml(html).trim().split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

function postToArticle(post) {
  const media = post._embedded && post._embedded['wp:featuredmedia'];
  const image = media && media[0] && media[0].source_url;
  const terms = post._embedded && post._embedded['wp:term'];
  const cats = terms && terms[0] ? terms[0].map((t) => t.name) : [];
  return {
    id: String(post.id),
    slug: post.slug,
    categoryLabel: cats.join(', ') || 'Uncategorized',
    title: post.title.rendered,
    excerpt: stripHtml(post.excerpt.rendered),
    author: (post.yoast_head_json && post.yoast_head_json.author) || 'HQuarters',
    date: formatDate(post.date),
    readTime: estimateReadTime(post.content.rendered),
    image: image || '/LOGO/hquarters-logo-wordmark.webp?v=20260822',
  };
}

export async function fetchArticles() {
  const posts = await get(`${API}/posts?per_page=12&_embed`);
  return posts.map(postToArticle);
}

export async function fetchArticle(id) {
  const post = await get(`${API}/posts/${id}?_embed`);
  return {
    ...postToArticle(post),
    contentHtml: cleanElementorContent(post.content.rendered),
  };
}
