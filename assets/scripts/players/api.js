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
    data: {
      player: {
        wins: 0,
        losses: 0
      }
    }
  })
}
