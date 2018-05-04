'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const playerEvents = require('./players/events.js')
const matchEvents = require('./matches/events.js')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  authEvents.addHandlers()
})

$(() => {
  playerEvents.playerHandlers()
})

$(() => {
  matchEvents.matchHandlers()
})

const $body = $('body')

$(document).on({
  ajaxStart: function () { $body.addClass('loading') },
  ajaxStop: function () { $body.removeClass('loading') }
})
