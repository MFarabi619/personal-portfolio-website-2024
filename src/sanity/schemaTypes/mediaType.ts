import {defineField, defineType} from 'sanity'
import { LinkIcon } from '@sanity/icons'

export const mediaType = defineType({
  name: 'mediaLinks',
  type: 'document',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'icon',
      type: 'image',
    }),
    defineField({
      name: 'link',
      type: 'url',
    }),
  ],
})
