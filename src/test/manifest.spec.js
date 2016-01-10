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

test('manifest must have _id', function (assert) {
  assert.plan(1)

  var ml = new ManifestList()

  ml.add([
    { '@id': 'bar', label: [{ '@value': 'Manifest 1'}] },
    { '@id': 'baz', label: [{ '@value': 'Manifest 2'}] }
  ])

  assert.ok(ml.get('baz', '@id')._id)

  assert.end()
})

test('must be able to get manifest by _id and @id', function (assert) {
  assert.plan(2)

  var ml = new ManifestList()

  ml.add([
    { _id: 'foo', '@id': 'bar', label: [{ '@value': 'Manifest 1'}] },
    { _id: 'fez', '@id': 'baz', label: [{ '@value': 'Manifest 2'}] }
  ])

  assert.equal(ml.get('foo').label[0]['@value'], 'Manifest 1', 'should be retrievable by _id')
  assert.equal(ml.get('baz', '@id').label[0]['@value'], 'Manifest 2', 'should be retrievable by @id')

  assert.end()
})

test('a manifest must be able to be created from an endpoint', function (assert) {
  assert.plan(0)
  /* To do: the following code works in the browser console, but requires promises to test. Possibly use local fixtures and mocks.
  var m = new Manifest()
  m.url = 'http://www.mocky.io/v2/568b32e4140000a52a8a1180'
  m.fetch({
      success: function (data) {
          console.log(data.models[0]._id)
          ml = data.models
          c.manifests = ml

      },
      error: function () {
          console.log('error while fetching')
      }
  })
  */
  assert.end()
})

test('canvases may be listed as embedded objects or @ids that must be dereferenced', function (assert) {
  assert.plan(0)
/*
  var ml = new ManifestList()

  ml.add([
    { _id: 'foo', '@id': 'bar', label: [{ '@value': 'Manifest 1'}] },
    { _id: 'fez', '@id': 'baz', label: [{ '@value': 'Manifest 2'}] }
  ])

  assert.equal(ml.get('foo').label[0]['@value'], 'Manifest 1', 'should be retrievable by _id')
  assert.equal(ml.get('baz', '@id').label[0]['@value'], 'Manifest 2', 'should be retrievable by @id')
*/
  assert.end()
})
