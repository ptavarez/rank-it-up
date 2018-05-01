'use strict'

require('../../../node_modules/jquery-toast-plugin/src/jquery.toast.js')
require('../../../node_modules/jquery-toast-plugin/src/jquery.toast.css')

const listChallengersTemplate = require('../templates/challenger-dropdown.handlebars')
const listOpposersTemplate = require('../templates/opposer-dropdown.handlebars')

const createMatchSuccess = function (data) {
  $('#newMatch').modal('hide')
  $('.new-match-form').get(0).reset()
  $.toast({
    text: 'Match Created', // Text that is to be shown in the toast
    icon: 'success', // Type of toast icon
    showHideTransition: 'fade', // fade, slide or plain
    allowToastClose: true, // Boolean value true or false
    hideAfter: 3000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
    stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
    position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values

    textAlign: 'left', // Text alignment i.e. left, right or center
    loader: true, // Whether to show loader or not. True by default
    loaderBg: '#FF0077', // Background color of the toast loader
    beforeShow: function () {}, // will be triggered before the toast is shown
    afterShown: function () {}, // will be triggered after the toat has been shown
    beforeHide: function () {}, // will be triggered before the toast gets hidden
    afterHidden: function () {} // will be triggered after the toast has been hidden
  })
}

const createMatchFailure = function () {
  $('.new-match-form').get(0).reset()
  $.toast({
    text: 'Please make sure to fill out both fields and try again.', // Text that is to be shown in the toast
    icon: 'error', // Type of toast icon
    showHideTransition: 'slide', // fade, slide or plain
    allowToastClose: true, // Boolean value true or false
    hideAfter: 4000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
    stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
    position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values

    textAlign: 'left', // Text alignment i.e. left, right or center
    loader: true, // Whether to show loader or not. True by default
    loaderBg: '#FF0077', // Background color of the toast loader
    beforeShow: function () {}, // will be triggered before the toast is shown
    afterShown: function () {}, // will be triggered after the toat has been shown
    beforeHide: function () {}, // will be triggered before the toast gets hidden
    afterHidden: function () {} // will be triggered after the toast has been hidden
  })
}

const getMatchesSuccess = function (data) {
  if (data.matches.length === 0) {
    $.toast({
      text: 'Please create a match first.', // Text that is to be shown in the toast
      icon: 'error', // Type of toast icon
      showHideTransition: 'slide', // fade, slide or plain
      allowToastClose: true, // Boolean value true or false
      hideAfter: 4000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
      stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
      position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values

      textAlign: 'left', // Text alignment i.e. left, right or center
      loader: true, // Whether to show loader or not. True by default
      loaderBg: '#FF0077', // Background color of the toast loader
      beforeShow: function () {}, // will be triggered before the toast is shown
      afterShown: function () {}, // will be triggered after the toat has been shown
      beforeHide: function () {}, // will be triggered before the toast gets hidden
      afterHidden: function () {} // will be triggered after the toast has been hidden
    })
  } else {
    $('.menu').hide()
    $('.matches-section').show()
    const showMatches = showMatchesTemplate({ matches: data.matches })
    $('.allMatches').html(showMatches)
  }
}

const getMatchesSuccessTwo = function (data) {
  if (data.matches.length === 0) {
    $('.menu').show()
    $('.matches-section').hide()
  } else {
    $('.matches-section').show()
    const showMatches = showMatchesTemplate({ matches: data.matches })
    $('.allMatches').html(showMatches)
  }
}

const getMatchesFailure = function () {
  $.toast({
    text: 'We are unable to fetch your matches at this time. Please try again later.', // Text that is to be shown in the toast
    icon: 'error', // Type of toast icon
    showHideTransition: 'slide', // fade, slide or plain
    allowToastClose: true, // Boolean value true or false
    hideAfter: 4000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
    stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
    position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values

    textAlign: 'left', // Text alignment i.e. left, right or center
    loader: true, // Whether to show loader or not. True by default
    loaderBg: '#FF0077', // Background color of the toast loader
    beforeShow: function () {}, // will be triggered before the toast is shown
    afterShown: function () {}, // will be triggered after the toat has been shown
    beforeHide: function () {}, // will be triggered before the toast gets hidden
    afterHidden: function () {} // will be triggered after the toast has been hidden
  })
}

const updateMatchSuccess = function () {
  $('#matchUpdate').modal('hide')
  $('.match-update-form').get(0).reset()
  $.toast({
    text: 'Match Updated', // Text that is to be shown in the toast
    icon: 'success', // Type of toast icon
    showHideTransition: 'fade', // fade, slide or plain
    allowToastClose: true, // Boolean value true or false
    hideAfter: 3000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
    stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
    position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values

    textAlign: 'left', // Text alignment i.e. left, right or center
    loader: true, // Whether to show loader or not. True by default
    loaderBg: '#FF0077', // Background color of the toast loader
    beforeShow: function () {}, // will be triggered before the toast is shown
    afterShown: function () {}, // will be triggered after the toat has been shown
    beforeHide: function () {}, // will be triggered before the toast gets hidden
    afterHidden: function () {} // will be triggered after the toast has been hidden
  })
}

const updateMatchFailure = function () {
  $('.match-update-form').get(0).reset()
  $.toast({
    text: 'Please confirm that the correct Match ID is provided. All fields are required.', // Text that is to be shown in the toast
    icon: 'error', // Type of toast icon
    showHideTransition: 'slide', // fade, slide or plain
    allowToastClose: true, // Boolean value true or false
    hideAfter: 4000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
    stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
    position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values

    textAlign: 'left', // Text alignment i.e. left, right or center
    loader: true, // Whether to show loader or not. True by default
    loaderBg: '#FF0077', // Background color of the toast loader
    beforeShow: function () {}, // will be triggered before the toast is shown
    afterShown: function () {}, // will be triggered after the toat has been shown
    beforeHide: function () {}, // will be triggered before the toast gets hidden
    afterHidden: function () {} // will be triggered after the toast has been hidden
  })
}

const deleteMatchSuccess = function () {
  $.toast({
    text: 'Match Deleted', // Text that is to be shown in the toast
    icon: 'success', // Type of toast icon
    showHideTransition: 'fade', // fade, slide or plain
    allowToastClose: true, // Boolean value true or false
    hideAfter: 3000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
    stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
    position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values

    textAlign: 'left', // Text alignment i.e. left, right or center
    loader: true, // Whether to show loader or not. True by default
    loaderBg: '#FF0077', // Background color of the toast loader
    beforeShow: function () {}, // will be triggered before the toast is shown
    afterShown: function () {}, // will be triggered after the toat has been shown
    beforeHide: function () {}, // will be triggered before the toast gets hidden
    afterHidden: function () {} // will be triggered after the toast has been hidden
  })
}

const deleteMatchFailure = function () {
  $.toast({
    text: 'Somethig went wrong with your request. Please try again later', // Text that is to be shown in the toast
    icon: 'error', // Type of toast icon
    showHideTransition: 'slide', // fade, slide or plain
    allowToastClose: true, // Boolean value true or false
    hideAfter: 4000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
    stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
    position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values

    textAlign: 'left', // Text alignment i.e. left, right or center
    loader: true, // Whether to show loader or not. True by default
    loaderBg: '#FF0077', // Background color of the toast loader
    beforeShow: function () {}, // will be triggered before the toast is shown
    afterShown: function () {}, // will be triggered after the toat has been shown
    beforeHide: function () {}, // will be triggered before the toast gets hidden
    afterHidden: function () {} // will be triggered after the toast has been hidden
  })
}

const getStandings = function (data) {
  if (data.matches.length === 0) {
    $.toast({
      text: 'Please create a match first.', // Text that is to be shown in the toast
      icon: 'error', // Type of toast icon
      showHideTransition: 'slide', // fade, slide or plain
      allowToastClose: true, // Boolean value true or false
      hideAfter: 4000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
      stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
      position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values

      textAlign: 'left', // Text alignment i.e. left, right or center
      loader: true, // Whether to show loader or not. True by default
      loaderBg: '#FF0077', // Background color of the toast loader
      beforeShow: function () {}, // will be triggered before the toast is shown
      afterShown: function () {}, // will be triggered after the toat has been shown
      beforeHide: function () {}, // will be triggered before the toast gets hidden
      afterHidden: function () {} // will be triggered after the toast has been hidden
    })
  } else {
    $('.menu').hide()
    $('.standings-section').show()
    const showByWins = orderByWins({ matches: data.matches })
    $('.standings').html(showByWins)
  }
}

const listPlayersSuccess = function (data) {
  $('.new-match-form').get(0).reset()
  if (data.players.length === 0) {
    $.toast({
      text: 'Please create a player first.', // Text that is to be shown in the toast
      icon: 'error', // Type of toast icon
      showHideTransition: 'slide', // fade, slide or plain
      allowToastClose: true, // Boolean value true or false
      hideAfter: 4000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
      stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
      position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values

      textAlign: 'left', // Text alignment i.e. left, right or center
      loader: true, // Whether to show loader or not. True by default
      loaderBg: '#FF0077', // Background color of the toast loader
      beforeShow: function () {}, // will be triggered before the toast is shown
      afterShown: function () {}, // will be triggered after the toat has been shown
      beforeHide: function () {}, // will be triggered before the toast gets hidden
      afterHidden: function () {} // will be triggered after the toast has been hidden
    })
  } else {
    const listChallengers = listChallengersTemplate({ players: data.players })
    $('#newMatchChallenger').html(listChallengers)
    const listOpposer = listOpposersTemplate({ players: data.players })
    $('#newMatchOpposer').html(listOpposer)
  }
}

const listPlayersFailure = function () {
  $.toast({
    text: 'We are unable to fetch your players at this time. Please try again later.', // Text that is to be shown in the toast
    icon: 'error', // Type of toast icon
    showHideTransition: 'slide', // fade, slide or plain
    allowToastClose: true, // Boolean value true or false
    hideAfter: 4000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
    stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
    position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values

    textAlign: 'left', // Text alignment i.e. left, right or center
    loader: true, // Whether to show loader or not. True by default
    loaderBg: '#FF0077', // Background color of the toast loader
    beforeShow: function () {}, // will be triggered before the toast is shown
    afterShown: function () {}, // will be triggered after the toat has been shown
    beforeHide: function () {}, // will be triggered before the toast gets hidden
    afterHidden: function () {} // will be triggered after the toast has been hidden
  })
}

module.exports = {
  createMatchSuccess,
  createMatchFailure,
  getMatchesSuccess,
  getMatchesSuccessTwo,
  getMatchesFailure,
  updateMatchSuccess,
  updateMatchFailure,
  deleteMatchSuccess,
  deleteMatchFailure,
  getStandings,
  listPlayersSuccess,
  listPlayersFailure
}
