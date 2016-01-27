$().ready(function(){
    $("registerForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            password: {
                required: true,
                minlength: 5
            },
            cPassword: {
                required: true,
                minleght: 5,
                equalTo: "#password"
            },
            email: {
                required: true,
                email: true
            },
            birthday: "required"
        },
        messages: {
            name: "Please enter your name",
            password: {
                required: "You must provide a password",
                minlenght: "Your password must be at least 5 characters"
            },
            cPassword: {
                required: "You must confirm your password",
                minlength: "Your password must be at least 5 characters",
                equalTo: "Your passwords didn't match"
            },
            birthday: "Please enter your birthday"
        }
    });
})