console.log("Your index.js file is loaded correctly!");



$( "#down" ).click(function() {
  $( "#down" ).slideDown( "slow", function() {
    // Animation complete.
  });
});