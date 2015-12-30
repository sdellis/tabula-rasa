import Model from 'ampersand-model'
import ImageCollection from './annotation-collection'
import AnnotationListCollection from './annotationlist-collection'

export default Model.extend({
  idAttribute: '@id',

  props: {
    '@id': 'string',
    '@context': 'string',
    '@type': {
      type: 'string',
      required: 'true',
      default: 'sc:Canvas'
    },
    label: 'string',
    height: 'number',
    width: 'number'
  },

  collections: {
    images: ImageCollection,
    other_content: AnnotationListCollection
  },

  session: {
    editing: {
      type: 'boolean',
      default: false
    },
    saved: {
      type: 'boolean',
      default: true
    }
  },

  isNew () {
    return !this.saved
  }

})
