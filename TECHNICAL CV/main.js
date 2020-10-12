console.log('it works')

$(document).ready(function () {
   $(' .sub-btn').click(function (event) {
       event.preventDefault()
       console.log('button clicked')
   })
})