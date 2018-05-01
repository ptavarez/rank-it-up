'use strict'

const config = require('../config')
const store = require('../store')

const createMatch = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/matches/',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const listPlayers = function () {
  return $.ajax({
    url: config.apiOrigin + '/players/',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createMatch,
  listPlayers
}
