function changeColor() {
    let currentClass = $('div').attr('class');

    switch (currentClass) {
        case 'red':
            $('div').removeClass('red').addClass('orange');
            break;
        case 'orange':
            $('div').removeClass('orange').addClass('yellow');
            break;
        case 'yellow':
            $('div').removeClass('yellow').addClass('green');
            break;
        case 'green':
            $('div').removeClass('green').addClass('blue');
            break;
        case 'blue':
            $('div').removeClass('blue').addClass('purple');
            break;
        case 'purple':
            $('div').removeClass('purple').addClass('red');
            break;
        default:
            $('div').removeClass(currentClass).addClass('red');
            break;
    }
}