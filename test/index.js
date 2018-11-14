const hsl = require('../')
const test = require('tap').test

test('pure white', function (assert) {
  let expected = '#ffffff'
  let actual = hsl(0, 100, 100)
  let it = 'max saturation and luminousity should return white'

  assert.is(actual, expected, it)
  assert.end()
})

test('medium gray', function (assert) {
  let expected = '#808080'
  let actual = hsl(0, 0, 50)
  var it = '0% saturation,50% saturation should be medium gray'

  assert.is(actual, expected, it)
  assert.end()
})
