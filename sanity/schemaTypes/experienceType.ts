import {defineField, defineType} from 'sanity'
import {CaseIcon} from '@sanity/icons'
// See all icons at https://icons.sanity.build/all?scheme=dark

export const experienceType = defineType({
  name: 'experience',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      type: 'image',
    }),
    defineField({
      name: 'role',
      type: 'string',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      options: {
        dateFormat: 'MMM YYYY',
      },
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      options: {
        dateFormat: 'MMM YYYY',
      },
    }),
    defineField({
      name: 'companyLink',
      type: 'url',
    }),
    defineField({
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'projectOrProductImage',
      type: 'image',
    }),
    defineField({
      name: 'projectOrProductLink',
      type: 'url',
    }),
  ],
})
