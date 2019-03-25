$('#flashF').show()
$('#flashL').show()
$('#flashA').show()
$('#flashS').show()
$('#flashH').show()
$('#sixthCard').show().delay(10000).hide(200000000000)
$('#seventhCard').show().delay(10000).hide(20000000000)
$('#eightCard').show().delay(10000).hide(2000000000000)
$('#ninthCard').show().delay(10000).hide(200000000000)


$('.cCard-flip-card').delay().css({
  'transition' : 'transform 5.0s',
  'transform-style' : 'preserve-3d',
  'transform': 'rotateY(180deg)'
})
$('.oCard-flip-card').delay().css({
  'transition' : 'transform 5.0s',
  'transform-style' : 'preserve-3d',
  'transform': 'rotateY(180deg)'
})
$('.dCard-flip-card').delay().css({
  'transition' : 'transform 5.0s',
  'transform-style' : 'preserve-3d',
  'transform': 'rotateY(180deg)'
})
$('.eCard-flip-card').delay().css({
  'transition' : 'transform 5.0s',
  'transform-style' : 'preserve-3d',
  'transform': 'rotateY(180deg)'
})

$('#firebaseui-auth-container').hide().delay(5000).fadeIn()
