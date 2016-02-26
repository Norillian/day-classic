// For all the custom scripts on DAY
$(document).ready(function(){
  // Define Profile Page
   if(window.location.href.indexOf("customer_edit") > -1) {
       $('#ShopContent').addClass('profile-page');
	   $('.profile-page').prepend("<h3 class='customEdit'>Edit profile</h3>");
    }
	
  // Search Dropdown
  $('.search-dropdown').on('click', function(e){
    e.preventDefault();
    $('#SearchBox').toggleClass('active');
  });

});
