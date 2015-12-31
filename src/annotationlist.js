import Model from 'ampersand-model'
import AnnotationCollection from './annotation-collection'

export default Model.extend({
  idAttribute: '@id',

  props: {
    '@id': 'string',
    '@context': 'string',
    '@type': {
      type: 'string',
      required: 'true',
      default: 'sc:AnnotationList'
    }
  },

  collections: {
    resources: AnnotationCollection
  }

})
