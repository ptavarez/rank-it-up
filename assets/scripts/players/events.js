'use strict'

const getFormFields = require('../../../lib/get-form-fields')
// const store = ('./../store.js')
const playerApi = require('./api')
const playerUi = require('./ui.js')

const onCreatePlayer = function (event) {
  event.preventDefault()
  // console.log(document.forms['New Player']['player[name]'].value)
  const data = getFormFields(this)
  playerApi.createPlayer(data)
    .then(playerUi.createPlayerSuccess)
    .catch(playerUi.createPlayerFailure)
}

const onGetPlayers = function (event) {
  console.log('You Clicked Me')
  playerApi.getPlayers()
    .then(playerUi.getPlayersSuccess)
}

const onDeleteBook = function (event) {
  const id = event.target.dataset.id
  playerApi.deletePlayer(id)
    .then(() => onGetPlayers(event))
}

const playerHandlers = () => {
  $('.new-player-form').on('submit', onCreatePlayer)
  $('.get-players').on('click', onGetPlayers)
  $('.player-delete').on('click', onGetPlayers)
  $('#allPlayers').on('click', '.player-delete', onDeleteBook)
}

module.exports = {
  playerHandlers
}
