import {defineMigration, at, setIfMissing, unset} from 'sanity/migrate'

const from = 'companyLogo'
const to = 'logo'

export default defineMigration({
  title: "Rename field from 'companyLogo' to 'logo'",
  documentTypes: ['experience'],

  migrate: {
    document(doc, context) {
      return [
        at(to, setIfMissing(doc[from])),
        at(from, unset())
      ]
    }
  }
})
