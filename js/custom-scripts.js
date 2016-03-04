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

  // find carousels
  $('.wide-banner.slider-content .cms-content-inner').slick({
      dots: false,
      infinite: true,
      speed: 750,
      fade: false,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 2500
  });

  //deactivate input fields on edit customer
  if($('#ShopContent.profile-page').length > 0) {
      $('#ShopContent.profile-page table td input').prop('disabled', true);
      $('#ShopContent.profile-page table td select').prop('disabled', true);
      $('#ShopContent.profile-page table td input#ctl00_plhContent_txtPassword').prop('disabled', false);

      $( "#ShopContent.profile-page h3" ).after( '<table style="margin-top:15px;"><tr><td>If something needs to be changed, please contact <a style="padding:0;display:inline-block;font-size: 14px;font-family: Georgia;font-weight:bold;" href="mailto:daycustomerservice@day.dk">Daycustomerservice@day.dk</a></td></tr></table>' );
  }

  //Remove specific links from productmenu
  $('#pMenuSublevelsbdy a:contains("DAY Item")').parent().addClass('hidden-menu-noos').hide();
  //$('#pMenuSublevelsbdy a:contains("Never Out Of Stock")').remove();
  //$('#pMenuSublevelsbdy a:contains("DAY2DAY")').remove();
  //$('#pMenuSublevelsbdy a[href="/pl/Day-_16016.aspx"]').parent().nextAll('li').remove();
  //$('#pMenuSublevelsbdy a[href="/pl/Day-_16016.aspx"]').remove();
  //$('#pMenuSublevelsbdy a[href="/pl/2NDDAY-_16026.aspx"]').parent().nextAll('li').remove();
  //$('#pMenuSublevelsbdy a[href="/pl/2NDDAY-_16026.aspx"]').remove();

  //Remove Favourites list from member menu
  $('#memberMenubdy a[href="/products/Productlist.aspx?ProductListTypeID=2"]').parent().remove();

  //when no products is available on the productlist show message
  if($('#ShopContent .prelement').length === 0 && $('.brand-page').length === 0 && window.location.href.indexOf("/pl/") > -1) {
      noProductsIsAvailable = $('<div></div>');
      noProductsIsAvailable.addClass('noProductsIsAvailable');
      noProductsIsAvailable.text('No products available right now.');
      $('#ShopContent').append(noProductsIsAvailable);
  }

  //Create menus for hidden noos menu

  if($('.hidden-menu-noos #pMenuSublevelsl2 li a.active').length > 0 && window.location.href.indexOf("/pl/") > -1) {
      var getNoosMenu = $('.hidden-menu-noos #pMenuSublevelsl2 li a.active').parent().children('#pMenuSublevelsl3').clone();
      getNoosMenu.removeAttr('id').addClass('brand-page-menu brand-menu-noos');
      $('#precontentContainer').append(getNoosMenu);
  }

});
