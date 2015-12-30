import Model from 'ampersand-model'
import ManifestCollection from './manifest-collection'
import IIIFCollection from './collection-collection'
import ServiceCollection from './service-collection'

export default Model.extend({

  idAttribute: '_id',

  url () {
    return 'https://tabula.space/collections/manifests' + '/' + this._id
  },

  props: {
    _id: 'string',
    '@id': 'string',
    '@type': {
      type: 'string',
      required: 'true',
      default: 'sc:Collection'
    },
    label: 'string',
    logo: 'string',
    license: 'string',
    viewingHint: 'string',
    related: 'string',
    seeAlso: 'string',
    within: 'string',
    thumbnail: 'string',
    description: 'string',
    attribution: 'string',
    metadata: 'array'
  },

  collections: {
    manifests: ManifestCollection,
    collections: IIIFCollection,
    services: ServiceCollection
  },

  derived: {
    app_url: {
      deps: ['_id'],
      fn () {
        return 'collections/' + this._id
      }
    }
  }
})
