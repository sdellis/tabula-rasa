'use strict'

import test from 'tape'
import Sequence from '../sequence.js'

test('sequence @type must equal sc:Sequence', function (assert) {
  assert.plan(1)

  var s = Sequence

  s = new Sequence()
  assert.equal(s['@type'], 'sc:Sequence', 'should be of @type sc:Sequence')

  assert.end()
})
