$('#flashF').show()
$('#flashL').show()
$('#flashA').show()
$('#flashS').show()
$('#flashH').show()
$('#sixthCard').show().delay(10000).hide(200000000000)
$('#seventhCard').show().delay(10000).hide(20000000000)
$('#eightCard').show().delay(10000).hide(2000000000000)
$('#ninthCard').show().delay(10000).hide(200000000000)


$('.cCard-flip-card').delay(11000).css({
  'transition' : 'transform 5.0s',
  'transform-style' : 'preserve-3d',
  'transform': 'rotateY(180deg)'
},10000)
$('.oCard-flip-card').delay(12000).css({
  'transition' : 'transform 5.0s',
  'transform-style' : 'preserve-3d',
  'transform': 'rotateY(180deg)'
},10000)
$('.dCard-flip-card').delay(13000).css({
  'transition' : 'transform 5.0s',
  'transform-style' : 'preserve-3d',
  'transform': 'rotateY(180deg)'
},10000)
$('.eCard-flip-card').delay(14000).css({
  'transition' : 'transform 5.0s',
  'transform-style' : 'preserve-3d',
  'transform': 'rotateY(180deg)'
},10000)

$('#firebaseui-auth-container').hide().delay(5000).fadeIn()
