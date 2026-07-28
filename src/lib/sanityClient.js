import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// projectId e dataset não são segredos: ficam visíveis em qualquer chamada
// feita pelo navegador, então podem ficar hardcoded aqui com segurança.
export const sanityClient = createClient({
  projectId: 'k637t7ts',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source) => builder.image(source)
