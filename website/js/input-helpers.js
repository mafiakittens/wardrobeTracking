/**
  * @desc populates today's date (UTC time zone) as default input value for
          daily wardrobe tracking
*/
var populateTodayInput = function(){
  var inputDate = document.getElementById("wardrobe-date");
  var today = new Date();
  inputDate.value = today.toISOString().substr(0,10);
}

// Run helper functions as soon as script is loaded (at the end of the page)
populateTodayInput();
