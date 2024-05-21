// ./sanity/lib/queries.ts

import {groq} from 'next-sanity'

export const EXPERIENCE_QUERY = groq`*[_type == "experience"]`

export const PROJECTS_QUERY = groq`*[_type == "project"]`
