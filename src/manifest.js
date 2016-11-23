import uuid from 'uuid'
import Model from 'ampersand-model'
import SequenceCollection from './sequence-collection'
import RangeCollection from './range-collection'
import LayerCollection from './layer-collection'

export default Model.extend({

  idAttribute: '_id',

  props: {
    _id: {
      type: 'string',
      required: 'true',
      default: uuid()
    },
    '@id': 'string',
    '@context': 'string',
    '@type': {
      type: 'string',
      required: 'true',
      default: 'sc:Manifest'
    },
    label: 'array',
    thumbnail: 'string',
    viewingHint: 'string',
    metadata: 'array'
  },

  collections: {
    sequences: SequenceCollection,
    structures: RangeCollection,
    layers: LayerCollection
  },

  derived: {
    subjects: {
      deps: ['metadata'],
      fn () {
        var s = ''

        if (this.metadata) {
          this.metadata.forEach(function (md) {
            if (md.label === 'Subjects') {
              s = md.value.join(', ')
            }
          })
        }

        return s
      }
    }
  },

  parse: function (response) {
    response.labels = []
    if (!Array.isArray(response.label)) {
      var l = { '@value': response.label }
      response.labels.push(l)
    } else {
      response.labels = response.label
    }
    response.label = response.labels
    delete response.labels

    if (typeof response._id === 'undefined' ) {
      response._id = ''
      var arr = response['@id'].split("/")
      // account for some servers which have suffixes with slashes
      // added to the ids such as /collection.json or /manifest.json
      var lastEl = arr[arr.length - 1]
      if (lastEl === '/collection.json' || lastEl === '/manifest.json'){
        var _id = arr[arr.length-2]
      } else {
        var _id = arr[arr.length-1]
      }

      response._id = _id
    }

    return response
  }

})
