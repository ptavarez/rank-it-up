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

const getMatches = function () {
  return $.ajax({
    url: config.apiOrigin + '/matches/',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getMatch = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/matches/' + id,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateMatch = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/matches/' + data.player.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteMatch = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/matches/' + id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createMatch,
  getMatches,
  getMatch,
  updateMatch,
  deleteMatch
}
