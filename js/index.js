console.log("Your index.js file is loaded correctly!");



$( "#down" ).click(function() {
  $( "#down" ).slideDown( "slow", function() {
    // Animation complete.
  });
});

$(document).ready(function(){
  $("#nav_menu li").click(function() {
	if($(this).text() == "About me") {
	  $("#about_detail").slideToggle("slow");
	  if($("#work_detail").is(":visible")) {
	    $("#work_detail").slideUp("slow");
	  }
	}
	if($(this).text() == "More Work") {
	  $("#work_detail").slideToggle("slow");
	  if($("#about_detail").is(":visible")) {
	    $("#about_detail").slideUp("slow");
	  }	  
	}	
  });
  $("#mail").click(function(){
    $("#mail_form_div").slideToggle("slow");
  });
  $("#mail_form").on('submit', function (e) {
    e.preventDefault();
    $("footer").css("background-color", "rgba(0,0,0,0.4)");    
    $("#form_message").show();
  });
  $("#close_button").on('click', function (e) {
    $("#form_message").hide();
    $("#mail_form")[0].reset();
    $("footer").css("background-color", "#00849E");
  });
});

		/*Logo change*/
		
document
  .getElementById("logo_img")
  .addEventListener("mouseover", mouseOver);
document
  .getElementById("logo_img")
  .addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("logo_img").src = "images/home128.png";
  document.getElementById("logo_img").style.width = "75px";
  document.getElementById("logo_img").style.height = "85px";
}

function mouseOut() {
  document.getElementById("logo_img").src = "images/Logo.png";
  document.getElementById("logo_img").style.width = "75px";
  document.getElementById("logo_img").style.height = "85px";
}

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});

		/*Photo "AppTravel" change*/
		
document
  .getElementById("AppTravel_img")
  .addEventListener("mouseover", mouseOver1);
document
  .getElementById("AppTravel_img")
  .addEventListener("mouseout", mouseOut1);

function mouseOver1() {
  document.getElementById("AppTravel_img").src = "images/Click.png";
  document.getElementById("AppTravel_img").style.width = "450px";
  document.getElementById("AppTravel_img").style.height = "430px";
}

function mouseOut1() {
  document.getElementById("AppTravel_img").src = "images/AppTravel.png";
  document.getElementById("AppTravel_img").style.width = "450px";
  document.getElementById("AppTravel_img").style.height = "430px";
}

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});


		/*Photo "AppEz" change*/
		
document
  .getElementById("AppEz_img")
  .addEventListener("mouseover", mouseOver2);
document
  .getElementById("AppEz_img")
  .addEventListener("mouseout", mouseOut2);

function mouseOver2() {
  document.getElementById("AppEz_img").src = "images/Click.png";
  document.getElementById("AppEz_img").style.width = "450px";
  document.getElementById("AppEz_img").style.height = "430px";
}

function mouseOut2() {
  document.getElementById("AppEz_img").src = "images/AppEz.png";
  document.getElementById("AppEz_img").style.width = "450px";
  document.getElementById("AppEz_img").style.height = "430px";
}

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});



		/*Photo "AppUSDA" change*/
		
document
  .getElementById("AppUSDA_img")
  .addEventListener("mouseover", mouseOver3);
document
  .getElementById("AppUSDA_img")
  .addEventListener("mouseout", mouseOut3);

function mouseOver3() {
  document.getElementById("AppUSDA_img").src = "images/Click.png";
  document.getElementById("AppUSDA_img").style.width = "450px";
  document.getElementById("AppUSDA_img").style.height = "430px";
}

function mouseOut3() {
  document.getElementById("AppUSDA_img").src = "images/AppUSDA.png";
  document.getElementById("AppUSDA_img").style.width = "450px";
  document.getElementById("AppUSDA_img").style.height = "430px";
}

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});


/*Photo "Pets" change*/
		
document
  .getElementById("Pets_img")
  .addEventListener("mouseover", mouseOver4);
document
  .getElementById("Pets_img")
  .addEventListener("mouseout", mouseOut4);

function mouseOver4() {
  document.getElementById("Pets_img").src = "images/Click.png";
  document.getElementById("Pets_img").style.width = "450px";
  document.getElementById("Pets_img").style.height = "430px";
}

function mouseOut4() {
  document.getElementById("Pets_img").src = "images/Pets.png";
  document.getElementById("Pets_img").style.width = "450px";
  document.getElementById("Pets_img").style.height = "430px";
}

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});


/*Photo "Portfolio" change*/
		
document
  .getElementById("Portfolio_img")
  .addEventListener("mouseover", mouseOver5);
document
  .getElementById("Portfolio_img")
  .addEventListener("mouseout", mouseOut5);

function mouseOver5() {
  document.getElementById("Portfolio_img").src = "images/Click.png";
  document.getElementById("Portfolio_img").style.width = "450px";
  document.getElementById("Portfolio_img").style.height = "430px";
}

function mouseOut5() {
  document.getElementById("Portfolio_img").src = "images/Portfolio.png";
  document.getElementById("Portfolio_img").style.width = "450px";
  document.getElementById("Portfolio_img").style.height = "430px";
}

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});



		/*Up button to scroll the site page to the top*/
		
const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? this.show() : this.hide();
    });
    document.querySelector('.btn-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();