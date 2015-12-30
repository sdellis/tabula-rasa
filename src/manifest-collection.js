import Collection from 'ampersand-rest-collection'
import Manifest from './manifest'

export default Collection.extend({
  url: 'https://tabula.space/collections/manifests',

  model: Manifest,

  getById (id) {
    let model = this.findWhere({_id: id})

    if (!model) {
      model = new Manifest({_id: id})
    }

    model.fetch()

    return model
  }
})
