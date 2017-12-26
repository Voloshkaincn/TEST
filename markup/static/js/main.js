jQuery(document).ready(function($) {
	$(".hamburger").click(function(){
	    $(this).toggleClass("is-active");
	    $('.sidebar ').toggleClass("is-active");
	    $('.header__logo').toggleClass("is-active");
	  });

	var error;

	function validRequired(elem){
		if(elem.val() === ""){
			var errorText = elem.data('text-required');
			var errorBlock = '<span class="error-mess">' + errorText + '</span>';
			elem.addClass('error')
					.after(errorBlock);
			console.log(errorText);
			error = true;
		};	
	};


	$('#submit').on('click', function(){
		$('.error').removeClass('error');
		$('.error-mess').remove();
		error = false;
		
		$('.required').each(function(){
			validRequired($(this));
		});
		
		var rv_url = /^(https?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?$/;
		var input_url = $('#addUrl');
		var url_val = input_url.val();
		if(!rv_url.test(url_val) && !input_url.hasClass('error')){
			var errorText = input_url.data('text-reg');
			var errorBlock = '<span class="error-mess">' + errorText + '</span>';
			$(input_url).addClass('error').after(errorBlock);
			error = true;
		};

		if (error == true){
			event.preventDefault()
			return false;
		};
		return true;
	});

	$('.tabs__item').click(function(){
		$('.tabs__item').removeClass('active');
		$(this).addClass('active');
	});

	$('#lastDay').click(function(){
		$('.dashboard__item').each(function(){
			var max_date;
			var date = new Date($(this).data('date'));
			var today = new Date();
			console.log(date);
			console.log($(this));

			if (date < today.setDate(today.getDate()-1) ) {
				$(this).hide();
			} else {
				$(this).show();
			};
		});
	});
	$('#week').click(function(){
		$('.dashboard__item').each(function(){
			var max_date;
			var date = new Date($(this).data('date'));
			var today = new Date();
			console.log(date);
			console.log($(this));

			if (date < today.setDate(today.getDate()-7) ) {
				$(this).hide();
			} else {
				$(this).show();
			};
		});
	});
	$('#month').click(function(){
		$('.dashboard__item').each(function(){
			var max_date;
			var date = new Date($(this).data('date'));
			var today = new Date();
			console.log(date);
			console.log($(this));

			if (date < today.setMonth(today.getMonth()-1) ) {
				$(this).hide();
			} else {
				$(this).show();
			};
		});
	});



});