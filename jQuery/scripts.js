// console.log($);

// console.log(document.getElementsByTagName('div'))
// console.log(document.getElementsByClassName('container'))
// console.log(document.querySelector('.container'))
// console.log($('.container'))
// console.log($('#row'))
// console.log($('#row p'))


$('#hide').click(function(){
    // console.log('someone clicked on hide')
    $('#thing').hide();
})

$('#show').click(function(){
    // console.log('someone clicked on hide')
    $('#thing').show();
})

$('#toggle').click(function(){
    // console.log('someone clicked on hide')
    $('#thing').toggle();
})

$('#html').click(function(){
    $('#thing').html("<p>New HTML here</p>");
})

$('#text').click(function(){
    $('#thing').text("<p>new text here</p>");
})

$('#css').click(function(){
    $('#thing').css({
        "background-color": "green",
        "border-radius": "50%",
        "font-size": "100px"
    });
})

$('#add-class').click(function(){
    $('#thing').addClass('btn-danger');
})
$('#toggle-class').click(function(){
    $('#thing').toggleClass('btn-danger');
})

$('#prepend').click(function(){
    $('#thing').prepend('Some prepended text');
})
$('#append').click(function(){
    $('#thing').append('Some appended text');
})
$('#fade-out').click(function(){
    $('#thing').fadeToggle(1500);
})
$('#slide').click(function(){
    $('#thing').slideToggle(1500);
})
$('#animate').click(function(){
    $('#thing').animate({
        'background-color': 'red',
        'height': '200px',
        'marigin-left': '100px'
    }, 3000)
})

// $('#add-btn').click(function(){
//     $('.container').append("<button>I'm a new button</button>");
// })

.hover(arg1, arg2)