

import Navbar from "../navbar/page"
import client from "@/sanity"
import imageUrlBuilder from '@sanity/image-url'
import {PortableText} from '@portabletext/react'
import { getAllPosts, getPostBySlug } from "@/lib/posts"

const builder = imageUrlBuilder(client)

function urlFor (source) {
  return builder.image(source)
}




export default function Post({ photo }) {

  return (
    <div className="w-screen h-screen bg-stone-900 text-white overflow-scroll">
      <Navbar />
      <div className="pt-16 md:pt-16 px-4 md:px-10 md:mx-10">
        <h1 className="text-5xl">{photo.title}</h1>

        <div className="pt-5 md:pt-10">
          <PortableText
            value={photo.body}
            
          />
        </div>

        {photo.images.map((image) => (
          <img
            key={image._key}
            src={urlFor(image.asset).url()}
            className="py-4"
          />
        ))}
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const photos = await getAllPosts()
  const paths = photos.map((photo) => ({ params: { slug: photo.slug.current } }))
  return { paths, fallback: false }
}



export async function getStaticProps({ params }) {
  
  const photo = await getPostBySlug(params.slug)

  return {
    props: {
      photo
    }
  }
}

