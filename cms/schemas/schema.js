// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Schema for blockContent
import blockContent from './blockContent'

// Schema for video
import video from './video'

// Types for the single pages
import home from './home'
import bio from './bio'
import news from './news'
import appearances from './appearances'
import interviews from './interviews'
import facts from './facts'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    home,
    bio,
    news,
    appearances,
    interviews,
    facts,
    blockContent,
    video,
  ]),
})
