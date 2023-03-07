function showDescription(descript){
	$("#description").html("Description: " + descript)
}

function hideDescription(){
	$("#description").html("")
}

function validate(){
	var txtDob = $("#txtDate").val();
	var dob = new Date(txtDob);
	if(dob >= new Date()){
		alert("Date of Birth is not valid. Date has to be before today.");
		return false;
	}
	var txtTel = $("#phone").val();
	if(isNaN(txtTel) || (txtTel.length) != 10){
		alert("Phone number is not valid or not in a valid format");
		return false;
	}
}
$(function() {
	var text = $(".text");
	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
  
	  if (scroll >= 50) {
		text.removeClass("hidden");
	  } else {
		text.addClass("hidden");
	  }
	});
  });
  