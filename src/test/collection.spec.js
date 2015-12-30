'use strict'

import test from 'tape'
// contains both Collection and CollectionList classes
import Collections from '../collection'
import ManifestList from '../manifest-collection'

test('collection @type must equal sc:Collection', function (assert) {
  assert.plan(1)

  var c = new Collections.Collection()
  assert.equal(c['@type'], 'sc:Collection', 'should be of @type sc:Collection')

  assert.end()
})

test('a collection must be able to contain a list of manifests', function (assert) {
  assert.plan(3)

  var ml = new ManifestList()
  var c = new Collections.Collection()

  assert.equal(ml.isCollection, true, 'the ManifestList should be an Ampersand Collection')

  ml.add([
    { _id: 'a', label: "Manifest 1"},
    { _id: 'b', label: "Manifest 2"}
  ])

  assert.equal(ml.get('a').label, 'Manifest 1', 'the first Manifest in the ManifestList should have a label of Manifest 1')

  c.manifests = ml
  assert.equal(c.manifests.length, 2, 'the collection should have a Manifest List with a length of 2')

  assert.end()
})

test('a collection must be able to contain a list of collections', function (assert) {
  assert.plan(2)

  var c = new Collections.Collection()

  var c1 = new Collections.Collection( { _id: 'c1', label: "Collection 1" } )
  var c2 = new Collections.Collection( { _id: 'c2', label: "Collection 2" } )
  var c3 = new Collections.Collection( { _id: 'c3', label: "Collection 3" } )

  c.collections.add([c1,c2])

  assert.equal(c.collections.get('c1').label, 'Collection 1', 'the collection c should have a collection with an id of c1 and a label of Collection 1')

  c.collections.get('c1').collections.add([c3])

  assert.equal(c.collections.get('c1').collections.get('c3').label, 'Collection 3', 'the sub-collection c1 should have a collection with an id of c3 and a label of Collection 3')


/*
  var cl = new CollectionList()
  var c = new Collection()

  assert.equal(cl.isCollection, true, 'the CollectionList should be an Ampersand Collection')

  cl.add([
    { _id: 'a', label: "Collection 1"},
    { _id: 'b', label: "Collection 2"}
  ])

  assert.equal(cl.get('a').label, 'Collection 1', 'the first Collection in the CollectionList should have a label of Collection 1')

  c.collections = cl
  assert.equal(c.collections.length, 2, 'the collection should have a CollectionList with a length of 2')
*/
  assert.end()
})
