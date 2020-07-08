;(function($, window, document, undefined) {

	$(document).ready(function(){
		let menuBtn=document.querySelector('.menu');

		function toggleMenu (){
			menuBtn.classList.toggle('active')
		}

		menuBtn.addEventListener('click', toggleMenu);

		function showMenu(){
			let menuList = document.querySelector('.burger-menu');
			showMenu.classList.toggle('overlay')

		}
		menuList.addEventListener('click', showMenu);
	});
		

})(jQuery, window, document);