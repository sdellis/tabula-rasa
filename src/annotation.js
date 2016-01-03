import Model from 'ampersand-model'
import ResourceCollection from './resource-collection'

export default Model.extend({
  idAttribute: '@id',

  props: {
    '@id': 'string',
    '@context': 'string',
    '@type': {
      type: 'string',
      required: 'true',
      default: 'oa:Annotation'
    },
    motivation: 'string',
    about: 'string'
  },

  collections: {
    resource: ResourceCollection
  },

  parse: function (response) {
    response.about = response.on // remap an oddly named attribute
    delete response.on

    response.resources = []
    if (!Array.isArray(response.resource)) {
      response.resources.push(response.resource)
    } else {
      response.resources = response.resource
    }
    delete response.resource

    return response
  }

})
