import {defineField, defineType} from 'sanity'
import { ProjectsIcon } from '@sanity/icons'

export const projectType = defineType({
  name: 'projects',
  type: 'document',
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'string',
    }),
    defineField({
      name: 'coverImage',
      type: 'image',
    }),
    defineField({
      name: 'technologiesUsed',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'technology'}]}],
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      name: 'liveLink',
      type: 'url',
    }),
    defineField({
      name: 'githubLink',
      type: 'url',
    }),
  ],
})
