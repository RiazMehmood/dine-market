import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

const token = process.env.SANITY_ACCESS_TOKEN

export const client = createClient({
  token,
  apiVersion,
  dataset,
  projectId,
  useCdn,
})


