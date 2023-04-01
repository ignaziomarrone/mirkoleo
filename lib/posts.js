import client from '../sanity'

export async function getAllPosts() {
  const results = await client.fetch(`*[_type == 'photos']{_id, title, slug, body, mainImage, publishedAt, images}`)
  return results
}

export async function getPostBySlug(slug) {
  const result = await client.fetch(
    `*[_type == 'photos' && slug.current == $slug]{_id, title, slug, body, publishedAt, images}`,
    { slug }
  )
  return result[0]
}
