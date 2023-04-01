import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: '6k0m0v9n', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: false // `false` if you want to ensure fresh data
})

export default client
