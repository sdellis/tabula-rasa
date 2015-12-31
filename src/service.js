import Model from 'ampersand-model'

export default Model.extend({
  idAttribute: '@id',

  props: {
    '@id': 'string',
    '@context': 'string',
    profile: 'string'
  }

})
