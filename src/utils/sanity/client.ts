import 'server-only'

import {createClient, type QueryParams} from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    // Set to `true` for production environment
    useCdn: false,
})

export async function sanityFetch<QueryResponse>({
    query,
    params = {},
    tags,
}: {
    query: string
    params?: QueryParams
    tags?: string[]
}) {
    return client.fetch<QueryResponse>(query, params, {
        next: {
            revalidate: process.env.NODE_ENV === 'development' ? 30 : 3600,
            tags,
        },
    })
}
