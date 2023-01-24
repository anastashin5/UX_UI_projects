console.log("Your index.js file is loaded correctly!");



$( "#down" ).click(function() {
  $( "#down" ).slideDown( "slow", function() {
    // Animation complete.
  });
});

$(document).ready(function(){
  $("header").hover(function() {
    $("#header_detail").slideToggle("slow");;
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

document
  .getElementById("logo_div")
  .addEventListener("mouseover", mouseOver);
document
  .getElementById("logo_div")
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