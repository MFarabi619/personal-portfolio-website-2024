import {defineField, defineType} from 'sanity'
import { BulbFilledIcon } from '@sanity/icons'

export const technologyType = defineType({
  name: 'technology',
  title: 'Technologies/Skills',
  type: 'document',
  icon: BulbFilledIcon,
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
    defineField({
      name: 'description',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'category',
      type: 'string',
      options:{
        list: [
          {title: 'Languages', value: 'languages'},
          {title: 'Frameworks & Libraries', value: 'frameworks-and-libraries'},
          {title: 'Tools', value: 'tools'}
        ],
        layout: 'radio'
      }
    })
  ],
})
