$('button').click(function(){
    $('img').show();
    $('ul').html('');
    $('#advice').text('select your favourite colour among the colours');
    $('#sel').text('your favourite colours in order');
    
    $('#img1').attr('src', 'red.jpg');
    $('#img2').attr('src', 'blue.jpg');
    $('#img3').attr('src', 'yellow.jpg');
});

/*
$('#img1').click(function(){
    $('ul').append('<li>Punainen</li>');
});
*/

$('img').each(function(){
    $(this).attr('src', $(this).data('color')+'.jpg');
});

$('img').click(function(){
    $('ul').append('<li>' + $(this).data('color')+'</li>');
    $(this).hide();
});