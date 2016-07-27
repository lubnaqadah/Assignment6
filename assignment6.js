

addresstype.addEventListener("click", function () {
	var selected = document.getElementById("addresstype").value;
	var address =  document.getElementById("otheraddress");

	if (selected == "7"){ 
		address.style.display = "block";
}
	else{
		address.style.display = "none";
    }
} );

var name = document.getElementById("name").value;
	var state = document.getElementById("state").value;
	var address = document.getElementById("address").value;
	var phone = document.getElementById("phone").value;
	var zip = document.getElementById("zip").value;
	var city = document.getElementById("city").value;
	var email = document.getElementById("email").value;
	var other = document.getElementById("other").value;

finish.addEventListener("click", validate, false);

function validate(finish) {
	finish.preventDefault();
	 var regName = /^[0-9]/g,
		 regState = /^([a-zA-Z]){2}$/,
		 regZip = /^[0-9]{5}(?:-[0-9 ]{4})?$/,
		 regPhone = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/,
		 regEmail =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		 valid = true;
	
	var name = document.getElementById("name").value;
	var state = document.getElementById("state").value;
	var address = document.getElementById("address").value;
	var phone = document.getElementById("phone").value;
	var zip = document.getElementById("zip").value;
	var city = document.getElementById("city").value;
	var email = document.getElementById("email").value;
	var other = document.getElementById("other").value;
	
	if (regName.test(name) === true || name.length == 0) {
		document.getElementById("name").style.borderColor = "red";
		valid = false;
	}
	
	if (regState.test(state) === false || state.length == 0) {
		document.getElementById("state").style.borderColor = "red";
		valid = false;
	}
	
	if (regZip.test(zip) === false || zip.length == 0) {
		document.getElementById("zip").style.borderColor = "red";
		valid = false;
	}
	
	if (regPhone.test(phone) === false || phone.length == 0) {
		document.getElementById("phone").style.borderColor = "red";
		valid = false;
	}
	
	
	if (regEmail.test(email) === false || email.length == 0) {
		document.getElementById("email").style.borderColor = "red";
		valid = false;
	}
	
	if (city.length == 0) {
		document.getElementById("city").style.borderColor = "red";
		valid = false;
	}
	
	if (address.length === 0) {
		document.getElementById("address").style.borderColor = "red";
		valid = false;
	}
	
	var selected = document.getElementById("addresstype").value;
	
	if (selected == "7"){ 
	if (other.length == 0) {
		document.getElementById("other").style.borderColor = "red";
		valid = false;
	}}
	
	
	if(valid == false){
		document.getElementById("error").innerHTML = "*Please enter the right value for the fields in red.";
		window.scrollTo(0,0);
	} else{
		
		document.getElementById("error").innerHTML = "";
		
		var confirm = window.confirm("Are you sure you are done?");
		
	if(confirm === true){
		var billing = document.getElementById("billing");
	var order = document.getElementById("build");
		order.style.display = "none";
		billing.style.display = "block";	
	}else{
		var billing = document.getElementById("billing");
	var order = document.getElementById("build")
		billing.style.display = "none";
		order.style.display = "block";
	}
		}
}






var hand = document.getElementById("handtossed");
var tc = document.getElementById("thincrust");
var york = document.getElementById("ny");
var free = document.getElementById("gf");


tossed.addEventListener("click", function(){ 
	hand.style.display = "block";
	tc.style.display = "none";
	york.style.display = "none";
	free.style.display = "none";
})

thin.addEventListener("click", function(){
	hand.style.display = "none";
	tc.style.display = "block";
	york.style.display = "none";
	free.style.display = "none";
})

newyork.addEventListener("click", function(){
	hand.style.display = "none";
	tc.style.display = "none";
	york.style.display = "block";
	free.style.display = "none";
})

gluten.addEventListener("click", function(){
	hand.style.display = "none";
	tc.style.display = "none";
	york.style.display = "none";
	free.style.display = "block";
})

order.addEventListener("change", totalPrice, false)



var total = 0.00;

function totalPrice() {
	var toss = document.getElementById("tossedsize").value;
	total += toss;
	
	var thi = document.getElementById("thinsize").value;
	total += thi;
//	alert(total);
	
	var nyork = document.getElementById("nysize").value;
	total += nyork;
	
	var gluten = document.getElementById("gfsize").value;
	total += gluten;
	
	var chee = document.getElementById("cheese").value;
	total += chee;
	
	var souce = document.getElementById("souce").value;
	total += souce;
	
	var selected = document.querySelectorAll('input[type=checkbox]');
    for (var i = 0; i < selected.length; i++) {
          if (selected[i].checked === true) {
             total = total + 0.99;
			
         }
		else{
			continue
		}
     }
	
	document.getElementById("total").innerHTML = "Total = " + parseFloat(total).toFixed(2);
	
	
};

//
//
//tossedsize.addEventListener("click", totalPrice
//	/*function() {
//	var price = document.getElementById("tossedsize").value;
//	total = total + parseFloat(price);
//	document.getElementById("total").innerHTML = "Total = " + total;
//}*/
//						   );
//
//thinsize.addEventListener("click", totalPrice
//		/*				  function() {
//	var price = document.getElementById("thinsize").value;
//	total = total + parseFloat(price);
//	document.getElementById("total").innerHTML = "Total = " + total;
//}*/);
//
//nysize.addEventListener("click", totalPrice/* function() {
//	var price = document.getElementById("nysize").value;
//	total = total + parseFloat(price);
//	document.getElementById("total").innerHTML = "Total = " + total;
//}*/);
//
//gfsize.addEventListener("click", totalPrice /*function() {
//	var price = document.getElementById("gfsize").value;
//	total = total + parseFloat(price);
//	document.getElementById("total").innerHTML = "Total = " + total;
//}*/);
//
//
//cheese.addEventListener("click", totalPrice/*function() {
//	var price = document.getElementById("cheese").value;
//	
//	total = total + parseFloat(price);
//	document.getElementById("total").innerHTML = "Total = " + total;
//}*/);
//
//
//souce.addEventListener("click", totalPrice /*function() {
//	var price = document.getElementById("souce").value;
//	
//	total = total + parseFloat(price);
//	document.getElementById("total").innerHTML = "Total = " + total;
//}*/);
//
//
// toppings.addEventListener("click", totalPrice /*function () {
//    var selected = document.querySelectorAll('input[type=checkbox]');
//    for (var i = 0; i < selected.length; i++) {
//          if (selected[i].checked === true) {
//             total = total + 0.99;
//			document.getElementById("total").innerHTML = "Total = " + parseFloat(total);
//         }
//		else{
//			continue
//		}
//     }
//}*/);




same.addEventListener("change", copy, false);


var name2 = document.getElementById("name2").value;
	var state2 = document.getElementById("state2").value;
	var address2 = document.getElementById("address2").value;
	var phone2 = document.getElementById("phone2").value;
	var zip2 = document.getElementById("zip2").value;
	var city2 = document.getElementById("city2").value;

function copy() {
	var check = document.getElementById("same")
	if (same.checked){
		document.getElementById("name2").value = name.value;
		document.getElementById("state2").value = state.value;
		document.getElementById("address2").value = address.value;
		document.getElementById("phone2").value = phone.value;
		document.getElementById("zip2").value = zip.value;
		document.getElementById("city2").value = city.value;
	} else {
		document.getElementById("name2").value = "";
		document.getElementById("state2").value = "";
		document.getElementById("address2").value = "";
		document.getElementById("phone2").value = "";
		document.getElementById("zip2").value = "";
		document.getElementById("city2").value = "";
	}
}


submit.addEventListener("click", validate2, false);

function validate2(submit) {
	submit.preventDefault();
	 var regName2 = /^[0-9]/g,
		 regState2 = /^([a-zA-Z]){2}$/,
		 regZip2 = /^[0-9]{5}(?:-[0-9 ]{4})?$/,
		 regPhone2 = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
		 regcvc = /^[0-9]{3,4}$/,
		 valid = true;
	
	
	var cvc = document.getElementById("cvc").value;
	
	if (regName2.test(name2) === true || name2.length == 0) {
		document.getElementById("name2").style.borderColor = "red";
		valid = false;
	}
	
	if (regState2.test(state2) === false || state2.length == 0) {
		document.getElementById("state2").style.borderColor = "red";
		valid = false;
	}
	
	if (regZip2.test(zip2) === false || zip2.length == 0) {
		document.getElementById("zip2").style.borderColor = "red";
		valid = false;
	}
	
	if (regPhone2.test(phone2) === false || phone2.length == 0) {
		document.getElementById("phone2").style.borderColor = "red";
		valid = false;
	}
	
	if (city2.length == 0) {
		document.getElementById("city2").style.borderColor = "red";
		valid = false;
	}
	
	if (address2.length == 0) {
		document.getElementById("address2").style.borderColor = "red";
		valid = false;
	}
	
	if (regcvc.test(cvc) === false || cvc.length == 0) {
		document.getElementById("cvc").style.borderColor = "red";
		valid = false;
	}
	
	
	currentDate = new Date();
    currentMonth = currentDate.getMonth() + 1;
    expMonth = parseInt(document.getElementById("month".value, 10));
    currentYear = currentDate.getFullYear();
    expirationYear = parseInt(document.getElementById("year".value, 10));

    if (expirationYear === currentYear) {
        if (expirationMonth <= currentMonth) {
            document.getElementById("cvc").style.borderColor = "red";
			valid = false;
        } else if (expirationMonth > currentMonth) {
            valid = false;
        }
    } 
	
	
	

	if(valid == false){
		document.getElementById("error").innerHTML = "*Please enter the right value for the fields in red.";
		window.scrollTo(0,0);
	} else{
		
	document.getElementById("error").innerHTML = "";	
	var confirm = window.confirm("Are you sure you are done?");
		
	if(confirm === true){
		var jumb = document.getElementById("jumb");
		var billing = document.getElementById("billing");
		var thanks = document.getElementById("thanks");
		billing.style.display = "none";
		thanks.style.display = "block";	
		jumb.style.display = "none";	
	}else{
		var billing = document.getElementById("billing");
		var thanks = document.getElementById("thanks")
		billing.style.display = "block";
		thanks.style.display = "none";
		jumb.style.display = "none";
	}
		}
	
}



