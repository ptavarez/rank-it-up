'use strict'

const getFormFields = require('../../../lib/get-form-fields')
// const store = ('./../store.js')
const playerApi = require('./api')
const playerUi = require('./ui.js')

const onCreatePlayer = function (event) {
  event.preventDefault()
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

const onGetPlayersTwo = function (event) {
  playerApi.getPlayers()
    .then(playerUi.getPlayersSuccessTwo)
}

const onUpdatePlayer = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  playerApi.updatePlayer(data)
    .then(playerUi.updatePlayerSuccess)
    .then(() => onGetPlayers(event))
    .catch(playerUi.updatePlayerFailure)
}

const onDeletePlayer = function () {
  const id = event.target.dataset.id
  playerApi.deletePlayer(id)
    .then(playerUi.deletePlayerSuccess)
    .then(() => onGetPlayersTwo(event))
    .catch(playerUi.deletePlayerFailure)
}

const onWinsDesc = function () {
  playerApi.winsDesc()
    .then(playerUi.getStandings)
    .catch()
}

const playerHandlers = () => {
  $('.new-player-form').on('submit', onCreatePlayer)
  $('.get-players').on('click', onGetPlayers)
  $('.player-update-form').on('submit', onUpdatePlayer)
  $('.allPlayers').on('click', '.player-delete', onDeletePlayer)
  $('.wins-desc').on('click', onWinsDesc)
}

module.exports = {
  playerHandlers
}
