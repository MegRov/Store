   // This is for counter 
    $('.counter').counterUp({
        delay: 10
    });

    /*******************************/
    // this is for smooth scroll on click
    /*******************************/
    $('a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 90
        }, 1000);
        event.preventDefault();
        // code

    });
	
	$('a[href*="#"]')
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(event) {
	if (
  		location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
 		&& 
  		location.hostname == this.hostname
		)
	{
  		var target = $(this.hash);
  		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  	if (target.length) {
		event.preventDefault();
		$('html, body').animate({
		  scrollTop: target.offset().top
		}, 1000, function() {
		  var $target = $(target);
		  $target.focus();
		  if ($target.is(":focus")) { 
			return false;
		  } else {
			$target.attr('tabindex','-1'); 
			$target.focus();
		  };
		});
 	 }
}
});