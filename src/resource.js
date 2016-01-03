import Model from 'ampersand-model'
import ServiceCollection from './service-collection'

export default Model.extend({
  idAttribute: '@id',

  props: {
    '@id': 'string',
    '@type': 'string',
    format: 'string',
    height: 'number',
    width: 'number'
  },

  collections: {
    service: ServiceCollection
  },

  parse: function (response) {
    response.services = []
    if (!Array.isArray(response.service)) {
      response.services.push(response.service)
    } else {
      response.services = response.service
    }
    delete response.service

    return response
  }

})
