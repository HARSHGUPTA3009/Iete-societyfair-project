let player1 = ''
let player2 = ''
document.addEventListener('DOMContentLoaded', function () {
  var audio = document.getElementById('myAudio')

  // Try to play audio
  var playPromise = audio.play()

  if (playPromise !== undefined) {
    playPromise
      .then(function () {
        // Audio is playing
      })
      .catch(function (error) {
        // Audio play was prevented
        console.log('Auto-play prevented:', error)
      })
  }

  // Capture input values when the button is clicked
  var captureButton = document.getElementById('captureButton')
  captureButton.addEventListener('click', function () {
    player1 = document.getElementById('player1Input').value
    player2 = document.getElementById('player2Input').value

    console.log(player1)
    console.log(player2)
    localStorage.setItem('one', player1)
    localStorage.setItem('two', player2)

    // Optionally, you can do something with the values here
  })
})

// export { player1, player2 }
