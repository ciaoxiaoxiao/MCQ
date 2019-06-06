// var parent = $('tr');
// var value = '<td><div class="card"><div class="top">new memo list</div><div class="bottom"><ul class="ele-list"><li><div class="pretty p-icon p-jelly p-round p-smooth"><input type="checkbox"><div class="state p-success"><i class="icon mdi mdi-check"></i><label>Pay Bills</label></div></div></li><li><div class="pretty p-icon p-jelly p-round p-smooth"><input type="checkbox"><div class="state p-success"><i class="icon mdi mdi-check"></i><label>Pain wall</label></div></div></li></ul><input class="short-cut-in" type="text"></div></div> </td>';

//for(let i = 0; i < 3; i++)
//    parent.prepend(value);
// function show_sign_in() {
//     $('#login_form').css('display', 'block');
// }
//
// function show_sign_up() {
//
// }
//
// function close_forms() {
//     $('#login_form').css('display', 'none');
//     $('#signup_form').css('display', 'none');
//     $('.error-message').remove();
// }

// $('#signin').on('click', function(){
//     show_sign_in();
// });
//
// $('#signup').on('click', function(){
//     show_sign_up();
// });
//
// $('.cancel-button').on('click', function() {
//     close_forms();
// });

$('.center-text').each(function(){
    $(this).css('line-height', $(this).parent('div').height() + "px");
});

function display_login() {
    $('#signin-form').css('display', 'block');
    $('#signup-form').css('display', 'none');
}

function display_signup() {
    $('#signin-form').css('display', 'none');
    $('#signup-form').css('display', 'block');
}

$('#login').on('click', function() {
    display_login();
    $('#signup').css('border-color', 'white');
    $('#signup').css('color', 'black');
    $(this).css('border-color', '#519e2e');
    $(this).css('color', '#519e2e');
});

$('#signup').on('click', function() {
    display_signup();
    $('#login').css('border-color', 'white');
    $('#login').css('color', 'black');
    $(this).css('border-color', '#519e2e');
    $(this).css('color', '#519e2e');
});
