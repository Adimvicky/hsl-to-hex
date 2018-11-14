const toRGB = require('hsl-to-rgb-for-reals')

let min = Math.min
let max = Math.max

function cycle (val) {
  val = min(val, 1e7)
  val = max(val, -1e7)

  while (val < 0) { val += 360 };
  while (val > 359) { val -= 360 };

  return val
};

function hsl (hue, saturation, luminosity) {
  hue = cycle(hue)

  saturation = max(min(saturation, 100), 0)
  luminosity = max(min(luminosity, 100), 0)

  saturation = saturation / 100
  luminosity = luminosity / 100

  var rgb = toRGB(hue, saturation, luminosity)

  return '#' + rgb
    .map(function (n) {
      return (256 + n).toString(16).substr(-2)
    })
    .join('')
};

module.exports = hsl
