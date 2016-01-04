import Model from 'ampersand-model'
import AnnotationListCollection from './annotationlist-collection'

export default Model.extend({
  idAttribute: '@id',

  props: {
    '@id': 'string',
    '@context': 'string',
    '@type': {
      type: 'string',
      required: 'true',
      default: 'sc:Layer'
    },
    label: 'string'
  },

  collections: {
    otherContent: AnnotationListCollection
  }

})
