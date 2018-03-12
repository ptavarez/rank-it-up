'use strict'

require('../../../node_modules/jquery-toast-plugin/src/jquery.toast.js')
require('../../../node_modules/jquery-toast-plugin/src/jquery.toast.css')

const showPlayersTemplate = require('../templates/player-listing.handlebars')

const createPlayerSuccess = function (data) {
  // const playerName = document.forms['.']['player[name]'].value
  // console.log('Players name is ' + playerName)
  $('#newPlayer').modal('hide')
  $('.new-player-form').get(0).reset()
  $.toast({
    text: 'Player Created', // Text that is to be shown in the toast
    heading: 'Success!', // Optional heading to be shown on the toast
    icon: 'success', // Type of toast icon
    showHideTransition: 'fade', // fade, slide or plain
    allowToastClose: true, // Boolean value true or false
    hideAfter: 3000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
    stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
    position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values

    textAlign: 'left', // Text alignment i.e. left, right or center
    loader: true, // Whether to show loader or not. True by default
    loaderBg: '#9EC600', // Background color of the toast loader
    beforeShow: function () {}, // will be triggered before the toast is shown
    afterShown: function () {}, // will be triggered after the toat has been shown
    beforeHide: function () {}, // will be triggered before the toast gets hidden
    afterHidden: function () {} // will be triggered after the toast has been hidden
  })
}

const createPlayerFailure = function () {
  $('.new-player-form').get(0).reset()
  $.toast({
    text: 'Please make sure to fill out both fields and try again.', // Text that is to be shown in the toast
    heading: 'Create Player Failure', // Optional heading to be shown on the toast
    icon: 'error', // Type of toast icon
    showHideTransition: 'slide', // fade, slide or plain
    allowToastClose: true, // Boolean value true or false
    hideAfter: 4000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
    stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
    position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values

    textAlign: 'left', // Text alignment i.e. left, right or center
    loader: true, // Whether to show loader or not. True by default
    loaderBg: '#9EC600', // Background color of the toast loader
    beforeShow: function () {}, // will be triggered before the toast is shown
    afterShown: function () {}, // will be triggered after the toat has been shown
    beforeHide: function () {}, // will be triggered before the toast gets hidden
    afterHidden: function () {} // will be triggered after the toast has been hidden
  })
}

const getPlayersSuccess = function (data) {
  if (data.players.length === 0) {
    $.toast({
      text: 'Please create a player first.', // Text that is to be shown in the toast
      heading: 'No Players', // Optional heading to be shown on the toast
      icon: 'error', // Type of toast icon
      showHideTransition: 'slide', // fade, slide or plain
      allowToastClose: true, // Boolean value true or false
      hideAfter: 4000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
      stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
      position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values

      textAlign: 'left', // Text alignment i.e. left, right or center
      loader: true, // Whether to show loader or not. True by default
      loaderBg: '#9EC600', // Background color of the toast loader
      beforeShow: function () {}, // will be triggered before the toast is shown
      afterShown: function () {}, // will be triggered after the toat has been shown
      beforeHide: function () {}, // will be triggered before the toast gets hidden
      afterHidden: function () {} // will be triggered after the toast has been hidden
    })
  } else {
    $('.menu').hide()
    $('.allPlayers').show()
    const showPlayers = showPlayersTemplate({ players: data.players })
    $('.allPlayers').html(showPlayers)
  }
}

const getPlayersSuccessTwo = function (data) {
  if (data.players.length === 0) {
    $('.menu').show()
    $('.allPlayers').hide()
  } else {
    $('.allPlayers').show()
    const showPlayers = showPlayersTemplate({ players: data.players })
    $('.allPlayers').html(showPlayers)
  }
}

const getPlayersFailure = function () {
  $.toast({
    text: 'We are unable to fetch your players at this time. Please try again later.', // Text that is to be shown in the toast
    heading: 'Error', // Optional heading to be shown on the toast
    icon: 'error', // Type of toast icon
    showHideTransition: 'slide', // fade, slide or plain
    allowToastClose: true, // Boolean value true or false
    hideAfter: 4000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
    stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
    position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values

    textAlign: 'left', // Text alignment i.e. left, right or center
    loader: true, // Whether to show loader or not. True by default
    loaderBg: '#9EC600', // Background color of the toast loader
    beforeShow: function () {}, // will be triggered before the toast is shown
    afterShown: function () {}, // will be triggered after the toat has been shown
    beforeHide: function () {}, // will be triggered before the toast gets hidden
    afterHidden: function () {} // will be triggered after the toast has been hidden
  })
}

const updatePlayerSuccess = function () {
  $('#playerUpdate').modal('hide')
  $('.player-update-form').get(0).reset()
  $.toast({
    text: 'Player Updated', // Text that is to be shown in the toast
    heading: 'Success!', // Optional heading to be shown on the toast
    icon: 'success', // Type of toast icon
    showHideTransition: 'fade', // fade, slide or plain
    allowToastClose: true, // Boolean value true or false
    hideAfter: 3000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
    stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
    position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values

    textAlign: 'left', // Text alignment i.e. left, right or center
    loader: true, // Whether to show loader or not. True by default
    loaderBg: '#9EC600', // Background color of the toast loader
    beforeShow: function () {}, // will be triggered before the toast is shown
    afterShown: function () {}, // will be triggered after the toat has been shown
    beforeHide: function () {}, // will be triggered before the toast gets hidden
    afterHidden: function () {} // will be triggered after the toast has been hidden
  })
}

const updatePlayerFailure = function () {
  $('.player-update-form').get(0).reset()
  $.toast({
    text: 'Please confirm that the correct Player ID is provided. All fields are required.', // Text that is to be shown in the toast
    heading: 'Error', // Optional heading to be shown on the toast
    icon: 'error', // Type of toast icon
    showHideTransition: 'slide', // fade, slide or plain
    allowToastClose: true, // Boolean value true or false
    hideAfter: 4000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
    stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
    position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values

    textAlign: 'left', // Text alignment i.e. left, right or center
    loader: true, // Whether to show loader or not. True by default
    loaderBg: '#9EC600', // Background color of the toast loader
    beforeShow: function () {}, // will be triggered before the toast is shown
    afterShown: function () {}, // will be triggered after the toat has been shown
    beforeHide: function () {}, // will be triggered before the toast gets hidden
    afterHidden: function () {} // will be triggered after the toast has been hidden
  })
}

const deletePlayerSuccess = function () {
  $.toast({
    text: 'Player Deleted', // Text that is to be shown in the toast
    heading: 'Success!', // Optional heading to be shown on the toast
    icon: 'success', // Type of toast icon
    showHideTransition: 'fade', // fade, slide or plain
    allowToastClose: true, // Boolean value true or false
    hideAfter: 3000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
    stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
    position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values

    textAlign: 'left', // Text alignment i.e. left, right or center
    loader: true, // Whether to show loader or not. True by default
    loaderBg: '#9EC600', // Background color of the toast loader
    beforeShow: function () {}, // will be triggered before the toast is shown
    afterShown: function () {}, // will be triggered after the toat has been shown
    beforeHide: function () {}, // will be triggered before the toast gets hidden
    afterHidden: function () {} // will be triggered after the toast has been hidden
  })
}

const deletePlayerFailure = function () {
  $.toast({
    text: 'Somethig went wrong with your request. Please try again later', // Text that is to be shown in the toast
    heading: 'Error', // Optional heading to be shown on the toast
    icon: 'error', // Type of toast icon
    showHideTransition: 'slide', // fade, slide or plain
    allowToastClose: true, // Boolean value true or false
    hideAfter: 4000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
    stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
    position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values

    textAlign: 'left', // Text alignment i.e. left, right or center
    loader: true, // Whether to show loader or not. True by default
    loaderBg: '#9EC600', // Background color of the toast loader
    beforeShow: function () {}, // will be triggered before the toast is shown
    afterShown: function () {}, // will be triggered after the toat has been shown
    beforeHide: function () {}, // will be triggered before the toast gets hidden
    afterHidden: function () {} // will be triggered after the toast has been hidden
  })
}

module.exports = {
  createPlayerSuccess,
  createPlayerFailure,
  getPlayersSuccess,
  getPlayersSuccessTwo,
  getPlayersFailure,
  updatePlayerSuccess,
  updatePlayerFailure,
  deletePlayerSuccess,
  deletePlayerFailure
}
