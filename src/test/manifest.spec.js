'use strict'

import test from 'tape'
import Manifest from '../manifest.js'
import ManifestList from '../manifest-collection'

test('manifest @type must equal sc:Manifest', function (assert) {
  assert.plan(1)

  var m = new Manifest()
  assert.equal(m['@type'], 'sc:Manifest', 'should be of @type sc:Manifest')

  assert.end()
})

test('must be able to get manifest by _id and @id', function (assert) {
  assert.plan(2)

  var ml = new ManifestList()

  ml.add([
    { _id: 'foo', '@id': 'bar', label: 'Manifest 1'},
    { _id: 'fez', '@id': 'baz', label: 'Manifest 2'}
  ])

  assert.equal(ml.get('foo').label, 'Manifest 1', 'should be retrievable by _id')
  assert.equal(ml.get('baz', '@id').label, 'Manifest 2', 'should be retrievable by @id')

  assert.end()
})
