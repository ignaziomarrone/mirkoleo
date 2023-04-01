

import Link from 'next/link'
import client from '@/sanity'
import Navbar from '../navbar/page'
import imageUrlBuilder from '@sanity/image-url'
import {getAllPosts} from '../../lib/posts'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Blog = ({photos}) => {
  return (
    <div className='w-screen h-screen bg-gradient-to-br from-stone-700 to-stone-900 text-white overflow-scroll'>
      <Navbar />
      <div className='md:pt-16 pt-3 mx-3 md:mx-10 pb-3'>      
        <h1 className='text-6xl'>Portfolio</h1>
        <br />
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0'>
          {photos.map(({ _id, title, slug, publishedAt, mainImage }) => slug && (
            <Link href={`/portfolio/${encodeURIComponent(slug.current)}`}>
              <ul key={_id} className='block border-2 m-1 p-1 border-red-800 rounded-md bg-stone-900 text-3xl'>
                
                  {title}
                
                  <br />
                  <h1 className='text-sm text-red-800 uppercase'>
                    {new Date(publishedAt).toLocaleDateString('it-IT')}
                  </h1>
                  <img src={urlFor(mainImage)} alt="Foto copertina" />
                
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}


export async function getServerSideProps() {
    const photos = await getAllPosts()
    return {
      props: {
        photos
      }
    }
}

export default Blog