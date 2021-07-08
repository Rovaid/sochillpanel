
$(document).ready(function () {
    var letCollapseWidth = false,
        paddingValue = 30,
        sumWidth = $('.navbar-right-block').width() + $('.navbar-left-block').width() + $('.navbar-brand').width() + paddingValue;

    $(window).on('resize', function () {
        navbarResizerFunc();
    });

    var navbarResizerFunc = function navbarResizerFunc() {
        if (sumWidth <= $(window).width()) {
            if (letCollapseWidth && letCollapseWidth <= $(window).width()) {
                $('#navbar').addClass('navbar-collapse');
                $('#navbar').removeClass('navbar-collapsed');
                $('nav').removeClass('navbar-collapsed-before');
                letCollapseWidth = false;
            }
        } else {
            $('#navbar').removeClass('navbar-collapse');
            $('#navbar').addClass('navbar-collapsed');
            $('nav').addClass('navbar-collapsed-before');
            letCollapseWidth = $(window).width();
        }
    };

    if ($(window).width() >= 768) {
        navbarResizerFunc();
    }    

$('[data-toggle="tooltip"]').tooltip();
  
  $('#orderform-category').change(function(){
    $('#service_description').removeClass('hidden');
});
  
    $('#orderform-service').change(function(){
    $('#service_description').removeClass('hidden');
});
  

/**  New Addition  **/

<!-- Sidebar UserDropdown -->
jQuery('.user-trigger').on('click', function(e){
  e.preventDefault();
    jQuery(this).siblings('.user-dropmenu').slideToggle();
});
  
<!-- Sidebar DropMenu Script -->
jQuery('.main-menu li.has-dropmenu > a').on('click', function(e){
  e.preventDefault();
  	jQuery('.main-menu li').removeClass('active');
    jQuery(this).parents('li').addClass('active').siblings().find('.dropmenu-container').slideUp();
    jQuery(this).siblings('.dropmenu-container').slideToggle();
});
  
  <!-- Show Sidebar on Mobile -->
    jQuery('.sidebar-toggle').on('click', function(e){
    e.preventDefault();
		jQuery('aside#sideBar').addClass('show');
  		jQuery('.sidebarCloseOverlay').fadeIn('fast');
    });
  
  	jQuery('.sidebarCloseOverlay').on('click', function(e){
      e.preventDefault();
		jQuery('aside#sideBar').removeClass('show');
  		jQuery('.sidebarCloseOverlay').fadeOut('fast');
    });
  
});


