$(function(){
	var blocBtnA = $(".bloc-bouton ").height();
	$(".bloc-bouton i").css("height",blocBtnA);
	

	$("*[id^='nav-']").on("click",function(e){
		e.preventDefault();
		var elem = $(this).attr("id").replace("nav-","");
		$('html, body').animate({
			scrollTop: $("#index-"+elem).offset().top
		}, 1000);
	});
});


$(function(){
	$('[data-toggle="tooltip"]').tooltip();

	var hauteur = $(document).height();
	$("#bloc-menu").css("height",hauteur);

	$(".bars").on("click",function(){
		$("#bloc-menu").fadeIn();
	});

	$("#btn-close-menu").on("click",function(){
		// alert();
		$("#bloc-menu").fadeOut();
	})
});

