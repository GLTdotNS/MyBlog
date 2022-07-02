// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import comment from './comment'
import banner from './banner'

export default createSchema({

  name: 'default',
  types: schemaTypes.concat([
    post,
    author,
    category,
    comment,
    blockContent,
    banner,
  ]),
})
