'use strict'

const getFormFields = require('../../../lib/get-form-fields')
// const store = ('./../store.js')
const playerApi = require('./api')
const playerUi = require('./ui.js')

const onCreatePlayer = function (event) {
  event.preventDefault()
  // console.log(document.forms['.new-player-form']['player[name]'].value)
  const data = getFormFields(this)
  playerApi.createPlayer(data)
    .then(playerUi.createPlayerSuccess)
    .catch(playerUi.createPlayerFailure)
}

const onGetPlayers = function (event) {
  playerApi.getPlayers()
    .then(playerUi.getPlayersSuccess)
    .catch(playerUi.getPlayersFailure)
}

const onUpdatePlayer = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  playerApi.updatePlayer(data)
    .then(playerUi.updatePlayerSuccess)
    .then(() => onGetPlayers(event))
    .catch(playerUi.updatePlayerFailure)
}

const onDeletePlayer = function () {
  const id = event.target.dataset.id
  playerApi.deletePlayer(id)
    .then(playerUi.deletePlayerSuccess)
    .then(() => onGetPlayers(event))
    .catch(playerUi.deletePlayerFailure)
}

const playerHandlers = () => {
  $('.new-player-form').on('submit', onCreatePlayer)
  $('.get-players').on('click', onGetPlayers)
  $('.player-update-form').on('submit', onUpdatePlayer)
  $('.allPlayers').on('click', '.player-delete', onDeletePlayer)
}

module.exports = {
  playerHandlers
}
