$(document).ready(function(){
		$('.xuong,.kn').click(function(){
			$('body,html').animate({scrollTop:$('#khoiedu').offset().top},700);
		});
		$('.gt').click(function(){
			$('body,html').animate({scrollTop:$('.khoitt1').offset().top},700);
			return false;
		});
		$('.cm').click(function(){
			$('body,html').animate({scrollTop:$('.khoicomment').offset().top},700);
			return false;
		});
		
});