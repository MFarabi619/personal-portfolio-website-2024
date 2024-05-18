import {defineField, defineType} from 'sanity'
import { StackCompactIcon } from '@sanity/icons'

export const faqType = defineType({
  name: 'faqType',
  title: 'FAQ',
  type: 'document',
  icon: StackCompactIcon,
  fields: [
    defineField({
      name: 'question',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'answer',
      type: 'array',
      of:[{type: 'block'}]
    })
  ],
})
