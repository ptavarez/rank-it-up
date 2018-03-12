'use strict'

const config = require('../config')
const store = require('../store')

const createPlayer = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/players/',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getPlayers = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/players/',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getPlayer = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/players/' + id,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updatePlayer = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/players/' + data.player.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deletePlayer = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/players/' + id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createPlayer,
  getPlayers,
  getPlayer,
  updatePlayer,
  deletePlayer
}
