$(document).ready(function() {
	$('.navbar-nav > li > a').click(function(e) {
		//Prevent a page reload when a link is pressed
		e.preventDefault();
		//Call the scroll function
		goToByScroll($(this).attr("class"));
	});
});

function goToByScroll(id){
	console.log(id);
	//Scroll
	$("html,body").animate({ scrollTop: $('#' + id).offset().top - 50}, 'slow');
	document.getElementById("nav-button").click();
};