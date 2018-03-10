'use strict'

const getFormFields = require('../../../lib/get-form-fields')
// const store = ('./../store.js')
const playerApi = require('./api')
const playerUi =  require('./ui.js')

const onCreatePlayer = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  playerApi.createPlayer(data)
    .then(playerUi.createPlayerSuccess)
  console.log(data)
}

const playerHandlers = () => {
  $('.new-player-form').on('submit', onCreatePlayer)
}

module.exports = {
  playerHandlers
}
