import Model from 'ampersand-model'
import RangeCollection from './range-collection'

export default Model.extend({
  idAttribute: '@id',

  props: {
    '@id': 'string',
    '@context': 'string',
    '@type': {
      type: 'string',
      required: 'true',
      default: 'sc:Range'
    },
    label: 'string',
    viewingDirection: 'string',
    viewingHint: 'string',
    startCanvas: 'string',
    ranges: 'array',
    canvases: 'array'
  }

})
