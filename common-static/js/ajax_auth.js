function login(){
        email = $('#login-email').val();
        password = $('#login-password').val();
        csrfmiddlewaretoken = document.getElementsByName("csrfmiddlewaretoken")[0].value;

        console.log(email);
        console.log(password);
        $.ajax({
            type:"POST",
            url:'/loginUser/',
            data:{
                'csrfmiddlewaretoken': csrfmiddlewaretoken,
                'email':email,
                'password':password,
            },
            success : function(data){
                console.log(data);
                if(data['message'] == "success"){
                    location.reload();
                }
                else if(data['message'] == "inactive"){
                    $('#login-error').text("Please verify this E-mail address.");
                }
                else{
                    $('#login-error').text("The E-mail and Password do not match.");
                }
            }
        });
}

function signup(){
        email = $('#signup-email').val();
        password = $('#signup-password').val();
        csrfmiddlewaretoken = document.getElementsByName("csrfmiddlewaretoken")[0].value;

        console.log(email);
        console.log(password);
        $.ajax({
            type:"POST",
            url:'/signupUser/',
            data:{
                'csrfmiddlewaretoken': csrfmiddlewaretoken,
                'email':email,
                'password':password,
            },
            success : function(data){
                console.log(data);
                if(data['message'] == "success"){
                    location.reload();
                }
                else if(data['message'] == "inactive"){
                    $('#signup-error').text("Please verify this E-mail address.");
                }
                else{
                    $('#signup-error').text("Email existed!");
                }
            }
        });
}

$('#login-btn').click(function() {
    login();
})

$('#signup-btn').click(function() {
    signup();
})
