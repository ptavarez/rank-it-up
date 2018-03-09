'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
}

const signInSuccess = function (data) {
  store.user = data.user
}

module.exports = {
  signUpSuccess,
  signInSuccess
}
