;(function($, window, document, undefined) {

	$(document).ready(function(){
		let menuBtn=document.querySelector('.menu');

		function toggleMenu (){
			menuBtn.classList.toggle('active')
		}

		menuBtn.addEventListener('click', toggleMenu);

		$('.menu').on('click', function(){
			$('.burger-menu').toggleClass('open');

		});
		$('.menu').on('click', function(){
			$('.header').toggleClass('open');

		});

	});
		

})(jQuery, window, document);