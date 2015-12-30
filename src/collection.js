import AmpersandModel from 'ampersand-model'
import AmpersandCollection from 'ampersand-rest-collection'
import ManifestList from './manifest-collection'
import ServiceList from './service-collection'

var CollectionList = AmpersandCollection.extend({
    mainIndex: '_id',
    model: function(props, options){
        return new Collection(props, options);
    },
    isModel: function(model){
        return model instanceof Collection;
    }
});

var Collection = AmpersandModel.extend({
    idAttribute: '_id',
    url () {
      return 'http://iiif.io/api/presentation/2.0/example/fixtures/collection.json'
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
      manifests: ManifestList,
      collections: CollectionList,
      services: ServiceList
    }
})

module.exports = {
    Collection: Collection,
    CollectionList: CollectionList
}
