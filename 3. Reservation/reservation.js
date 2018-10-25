"use strict";
var $ = function(id) { return document.getElementById(id); };

var saveReservation = function() {
    
    
    // submit form
    
	var inputADate = document.getElementById("arrival_date");
	sessionStorage.setItem("arrivalDate", inputADate.value);
	var inputNights = document.getElementById("nights");
	sessionStorage.setItem("nights", inputNights.value);
	var name = document.getElementById("name");
	sessionStorage.setItem("name", name.value);
	var adults = document.getElementById("adults");
	sessionStorage.setItem("adults", adults.value);
	var children = document.getElementById("children");
	sessionStorage.setItem("children", children.value);
	var email = document.getElementById("email");
	sessionStorage.setItem("email", email.value);
	var phone = document.getElementById("phone");
	sessionStorage.setItem("phone", phone.value);
	 if($("standard").checked){
        sessionStorage.roomType=$("standard").value; 
    }
    else if($("business").checked){
        sessionStorage.roomType=$("business").value; 
    }
    else{
        sessionStorage.roomType=$("suite").value; 
    }
   
    if($("king").checked){
          sessionStorage.bedType=$("king").value;
    }
    else{
          sessionStorage.bedType=$("double").value;
    }
    
    if($("smoking").checked){
            sessionStorage.smoking=$("smoking").value;
    }
   else{
        sessionStorage.smoking="No Smoking";
   }
	$("reservation_form").submit();
};

window.onload = function() {
    $("submit_request").onclick = saveReservation;
    $("arrival_date").focus();
};