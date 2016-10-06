import Model from 'ampersand-model'
import Resource from './resource'

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

  children: {
    resource: Resource
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
