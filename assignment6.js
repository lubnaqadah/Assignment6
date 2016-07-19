
var total = 0;

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



submit.addEventListener("click", validate, false);

function validate(submit) {
	submit.preventDefault();
	 var regName = /^[0-9]/g,
		 regState = /^([a-zA-Z]){2}$/,
		 regZip = /^[0-9]{5}(?:-[0-9 ]{4})?$/,
		 regPhone = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
		 regEmail =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		 valid = true;
	
	var name = document.getElementById("name").value;
	var state = document.getElementById("state").value;
	var address = document.getElementById("other").value;
	var phone = document.getElementById("phone").value;
	var zip = document.getElementById("zip").value;
	var city = document.getElementById("city").value;
	var email = document.getElementById("email").value;
	var other = document.getElementById("other").value;
	
	if (regName.test(name) === true || name.length == 0) {
		document.getElementById("name").style.borderColor = "red";
		valid = false;
	}else{
		valid = true;
	}
	
	if (regState.test(state) === false) {
		document.getElementById("state").style.borderColor = "red";
		valid = false;
	}
	
	if (regZip.test(zip) === false) {
		document.getElementById("zip").style.borderColor = "red";
		valid = false;
	}
	
	if (regPhone.test(phone) === false) {
		document.getElementById("phone").style.borderColor = "red";
		valid = false;
	}
	
	
	if (regEmail.test(email) === false) {
		document.getElementById("email").style.borderColor = "red";
		valid = false;
	}
	
	if (city.length == 0) {
		document.getElementById("city").style.borderColor = "red";
		valid = false;
	}
	
	if (address.length == 0) {
		document.getElementById("address").style.borderColor = "red";
		valid = false;
	}
	
	if (other.length == 0) {
		document.getElementById("other").style.borderColor = "red";
		valid = false;
	}
	
	
	if(valid == false){
		document.getElementById("error").innerHTML = "*Please enter the right value for the fields in red.";
		window.scrollTo(0,0);
	} else{
		var confirm = window.confirm("Are you sure you are done?");
		return confirm;
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


tossedsize.addEventListener("click", function() {
	var price = document.getElementById("tossedsize").value;
	total = total + parseFloat(price);
	document.getElementById("total").innerHTML = "Total = " + total;
});

thinsize.addEventListener("click", function() {
	var price = document.getElementById("thinsize").value;
	total = total + parseFloat(price);
	document.getElementById("total").innerHTML = "Total = " + total;
});

nysize.addEventListener("click", function() {
	var price = document.getElementById("nysize").value;
	total = total + parseFloat(price);
	document.getElementById("total").innerHTML = "Total = " + total;
});

gfsize.addEventListener("click", function() {
	var price = document.getElementById("gfsize").value;
	total = total + parseFloat(price);
	document.getElementById("total").innerHTML = "Total = " + total;
});


cheese.addEventListener("click", function() {
	var price = document.getElementById("cheese").value;
	
	total = total + parseFloat(price);
	document.getElementById("total").innerHTML = "Total = " + total;
});


souce.addEventListener("click", function() {
	var price = document.getElementById("souce").value;
	
	total = total + parseFloat(price);
	document.getElementById("total").innerHTML = "Total = " + total;
});


 toppings.addEventListener("click", function () {
    var selected = document.querySelectorAll('input[type=checkbox]');
    for (var i = 0; i < selected.length; i++) {
          if (selected[i].checked === true) {
             total = total + 0.99;
			document.getElementById("total").innerHTML = "Total = " + parseFloat(total);
         }
		else{
			continue
		}
     }
});








