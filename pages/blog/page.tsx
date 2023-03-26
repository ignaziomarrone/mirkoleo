// frontend/pages/index.tsx

import Link from 'next/link'
import groq from 'groq'
import client from '@/client'
import Navbar from '../navbar/page'
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Blog = ({posts}) => {
    return (
      <div className='w-screen h-screen bg-gradient-to-br from-stone-700 to-stone-900 text-white overflow-scroll'>
        <Navbar />
        <div className='md:pt-16 pt-3 mx-10'>

        
        
          <h1 className='text-6xl'>Portfolio</h1>
          <br />
          <div className='grid grid-cols-1 md:grid-cols-3 space-y-5'>
            {posts.map(
              ({ _id, title = '', slug = '', publishedAt = '', mainImage}) =>
                slug && (
                  <ul key={_id} className='block border-2 m-1 p-1 border-red-800 rounded-md bg-stone-900 text-3xl'>
                    <Link href={`/post/${encodeURIComponent(slug.current)}`}>
                      {title}
                    </Link>{' '}
                    <br />
                    <h1 className='text-sm text-red-800 uppercase'>
                      {new Date(publishedAt).toDateString()}
                    </h1>
                    
                    <img 
                    src={urlFor(mainImage)}
                    alt="Foto copertina" />
                        
                  </ul>
                  
                )
            )}
          </div>
        </div>
      </div>
    )
}

export async function getStaticProps() {
    const posts = await client.fetch(groq`
      *[_type == "post"] | order(publishedAt desc)
    `)
    return {
      props: {
        posts
      }
    }
}

export default Blog