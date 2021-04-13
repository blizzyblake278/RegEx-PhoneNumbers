"use strict";
$(document).ready(function() {
    $("#validate").click(function() {
        let phone = $("#phone").val();
        // var pattern = /^\d{3}-\d{3}-\d{4}$/;                        // 999-999-9999
        // var pattern = /^(1\s|1-)?\d{3}-\d{3}-\d{4}$/;               // 1 | 1-999-999-9999
        // var pattern = /^(1\s|1-|1.)?\d{3}[-.]\d{3}[-.]\d{4}$/;         // 1.555.555.5555 or 1-555-555-5555
        let pattern = /^(1\s|1-|1.)?(\(\d{3}\)|\d{3}) ?[-.]\d{3}[-.]\d{4}$/;         // 1-(555)-555-5555 or 1 (555).555.5555
        let isValid = pattern.test(phone);

        $("#message").text( (isValid) ? "Valid phone number" : "Invalid phone number" );
        $("#phone").focus();
    }); // end click()
    
    $("#phone").val( "123-456-7890" );  // set default phone number
    $("#phone").focus(); // set focus on initial load
    
}); // end ready()