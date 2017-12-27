jQuery(document).ready(function($) {
	var ie = false;
	if (Object.hasOwnProperty.call(window, "ActiveXObject") && !window.ActiveXObject) {
	    ie = true;
	}

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
		var tab = $(this).attr('id');
		var today = new Date();
		var limitDays;
		if (tab == 'lastDay') {
			limitDays = today.setDate(today.getDate()-1);
		};
		if (tab == 'week') {
			limitDays = today.setDate(today.getDate()-7);
		}
		if (tab == 'month') {
			limitDays = today.setMonth(today.getMonth()-1);
		}
		$('.dashboard__item').each(function(){
			if (ie) {
				var strDate = $(this).data("date");
				var regex = /^(\d{2}).(\d{2}).(\d{4})/;
				var regexResult = strDate.match(regex);
				var date = new Date(regexResult[3]+"/"+regexResult[1]+"/"+regexResult[2]);
			} else {

				var date = new Date($(this).data("date"));
			};
			if (date < limitDays) {
				$(this).hide();
			} else {
				$(this).show();
			};
		});
	});


	$('#addSocialForm').submit(function(){


	});


});