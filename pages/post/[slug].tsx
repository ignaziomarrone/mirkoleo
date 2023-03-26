// [slug].tsx

'use client'

import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import {PortableText} from '@portabletext/react'
import client from '../../client'
import Navbar from '../navbar/page'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      )
    }
  }
}

const Post = ({post}) => {
  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    body = [],
    mainImage 
  } = post
  return (
    <div className='w-screen h-screen bg-stone-900 text-white overflow-scroll'>
    <Navbar />
    <article className='pt-16 mx-10'>
      <h1 className='text-5xl'>{title}</h1>
      <span className='text-red-800 text-xl'>{name}</span>
      {categories && (
        <ul>
          Posted in
          {categories.map(category => <li key={category}>{category}</li>)}
        </ul>
      )}

      {mainImage && (
        <div className='flex w-full justify-center md:px-20 py-10'>
          <img 
          src={urlFor(mainImage)
            .width()
            .url()} 
          alt="Foto" />
        </div>
      )}

      

      <div className='pt-5 w-full py-10'>
        <PortableText
          value={body}
          components={ptComponents}
        />

      </div>
    </article>
    </div>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body,
  mainImage
}`
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post
    }
  }
}
export default Post