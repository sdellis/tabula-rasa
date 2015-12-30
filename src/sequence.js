import Model from 'ampersand-model'
import CanvasCollection from './canvas-collection'

export default Model.extend({
  idAttribute: '@id',

  props: {
    '@id': 'string',
    '@context': 'string',
    '@type': {
      type: 'string',
      required: 'true',
      default: 'sc:Sequence'
    },
    label: 'string',
    viewingDirection: 'string',
    viewingHint: 'string',
    startCanvas: 'string'
  },

  collections: {
    canvases: CanvasCollection
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
