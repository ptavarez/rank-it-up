'use strict'

const playerApi = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const store = ('./../store.js')

const onCreatePlayer = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  playerApi.createPlayer(data)
  console.log(data)
}

const playerHandlers = () => {
  $('.new-player-form').on('submit', onCreatePlayer)
}

module.exports = {
  playerHandlers
}
