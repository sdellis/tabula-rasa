import Model from 'ampersand-model'
import SequenceCollection from './sequence-collection'

export default Model.extend({

  idAttribute: '_id',

  url () {
    return parent.url + '/' + this._id
  },

  props: {
    _id: 'string',
    '@id': 'string',
    '@context': 'string',
    '@type': {
      type: 'string',
      required: 'true',
      default: 'sc:Manifest'
    },
    label: 'string',
    thumbnail: 'string',
    viewingHint: 'string',
    metadata: 'array'
  },

  collections: {
    sequences: SequenceCollection
  },

  derived: {
    app_url: {
      deps: ['_id'],
      fn () {
        return 'presentations/' + this._id
      }
    },
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
  }

})
