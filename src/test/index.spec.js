'use strict'

import test from 'tape'
import TabulaRasa from '../index.js'

test('must be able to create a collection with a manifest with a sequence with a canvas', function (assert) {
  assert.plan(4)

  var c = new TabulaRasa.Collections.Collection()

  assert.equal(c['@type'], 'sc:Collection', 'should be of @type sc:Collection')

  var ml = new TabulaRasa.ManifestList()

  ml.add([
    { _id: 'foo', '@id': 'bar', label: 'Manifest 1'},
    { _id: 'fez', '@id': 'baz', label: 'Manifest 2'}
  ])

  c.manifests = ml

  assert.equal(c.manifests.length, 2, 'the collection should have a Manifest List with a length of 2')
  assert.equal(c.manifests.get('foo').label, 'Manifest 1', 'should be retrievable by _id')
  assert.equal(c.manifests.get('baz', '@id').label, 'Manifest 2', 'should be retrievable by @id')

  assert.end()
})
