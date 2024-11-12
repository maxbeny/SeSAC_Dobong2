
function changeColor() {
    if($('div').hasClass('red'))
    $('div').switchClass('red', 'orange')

    if($('div').hasClass('orange'))
    $('div').switchClass('orange', 'yellow')

    if($('div').hasClass('yellow'))
    $('div').switchClass('yellow', 'green')

    if($('div').hasClass('green'))
    $('div').switchClass('green', 'blue')

    if($('div').hasClass('blue'))
    $('div').switchClass('blue', 'purple')
  }