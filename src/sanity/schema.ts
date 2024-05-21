import {type SchemaTypeDefinition} from 'sanity'

// import blockContent from './schemaTypes/blockContent'
// import category from './schemaTypes/category'
// import post from './schemaTypes/post'
// import author from './schemaTypes/author'
//
// export const schema: { types: SchemaTypeDefinition[] } = {
//   types: [post, author, category, blockContent, ],
// }

import {experienceType} from './schemaTypes/experienceType'
import {projectType} from './schemaTypes/projectType'
import {technologyType} from './schemaTypes/technologyType'
import {faqType} from './schemaTypes/faqType'
import {mediaType} from './schemaTypes/mediaType'

export const schema: {types: SchemaTypeDefinition[]} = {
    types: [experienceType, projectType, technologyType, faqType, mediaType],
}
