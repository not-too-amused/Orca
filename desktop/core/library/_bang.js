'use strict'

const Operator = require('../operator')

function OperatorBang (orca, x, y, passive) {
  Operator.call(this, orca, x, y, '*', true)

  this.name = 'bang'
  this.info = 'Bangs neighboring operators.'
  this.draw = false

  // Overwrite run, to disable draw.

  this.run = function (force = false) {

  }

  this.haste = function () {
    this.passive = true
    this.erase()
  }
}

module.exports = OperatorBang
