
$(function() {
	// Get page title
  	var pageTitle = $("title").text();

	// Change page title on blur
	$(window).blur(function() {
	  $("title").text("სად მიდიხარ ჯო...");
	});

	// Change page title back on focus
	$(window).focus(function() {
	  $("title").text(pageTitle);
	});
});