// For all the custom scripts on DAY
$(document).ready(function(){
  // Define Profile Page
   if(window.location.href.indexOf("customer_edit") > -1) {
       $('#ShopContent').addClass('profile-page');
	   $('.profile-page').prepend("<h3 class='customEdit'>Edit profile</h3>");
    }
	
	if(window.location.href.indexOf("AccountStatement") > -1) {
       $('#ShopContent').addClass('account-statement');
	   $('.account-statement').prepend("<h3 class='customEdit'>See account statement</h3>");
    }
	
	if(window.location.href.indexOf("orderinvoicestat") > -1) {
       $('#ShopContent').addClass('order-page');
	   $('.order-page').prepend("<h3 class='customEdit'>Order stat</h3>");
    }
	
	if(window.location.href.indexOf("Productlist.aspx") > -1) {
       $('#ShopContent').addClass('favourite-page');
	   $('.favourite-page').prepend("<h3 class='customEdit'>Favourites list</h3>");
    }
	
  // Search Dropdown
  $('.search-dropdown').on('click', function(e){
    e.preventDefault();
    $('#SearchBox').toggleClass('active');
  });

});
