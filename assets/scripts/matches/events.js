'use strict'

const getFormFields = require('../../../lib/get-form-fields')
// const store = ('./../store.js')
const matchApi = require('./api')
const matchUi = require('./ui.js')

const onCreateMatch = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  matchApi.createMatch(data)
    .then(matchUi.createMatchSuccess)
    .catch(matchUi.createMatchFailure)
}

const onGetMatches = function (event) {
  matchApi.getMatches()
    .then(matchUi.getMatchesSuccess)
    .catch(matchUi.getMatchesFailure)
}

const onGetMatchesTwo = function (event) {
  matchApi.getMatches()
    .then(matchUi.getMatchesSuccessTwo)
}

const onUpdateMatch = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  matchApi.updateMatch(data)
    .then(matchUi.updateMatchSuccess)
    .then(() => onGetMatches(event))
    .catch(matchUi.updateMatchFailure)
}

const onDeleteMatch = function () {
  const id = event.target.dataset.id
  matchApi.deleteMatch(id)
    .then(matchUi.deleteMatchSuccess)
    .then(() => onGetMatchesTwo(event))
    .catch(matchUi.deleteMatchFailure)
}

const onWinsDesc = function () {
  matchApi.winsDesc()
    .then(matchUi.getStandings)
    .catch()
}

const matchHandlers = () => {
  $('.new-match-form').on('submit', onCreateMatch)
  $('.get-matches').on('click', onGetMatches)
  $('.match-update-form').on('submit', onUpdateMatch)
  $('.allMatches').on('click', '.match-delete', onDeleteMatch)
  $('.wins-desc').on('click', onWinsDesc)
}

module.exports = {
  matchHandlers
}
