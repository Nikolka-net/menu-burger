document.addEventListener('DOMContentLoaded', function () { // загрузка всей стр.

	let headerBurger = document.querySelector('.header__burger');
	let headerBurgerMenu = document.querySelectorAll(
		'.header__burger, .header__menu'
	);
	let body = document.querySelector('body');

	headerBurger.addEventListener('click', function () {
		for (let i = 0; i < headerBurgerMenu.length; i++) {
			headerBurgerMenu[i].classList.toggle('active');
		}
		body.classList.toggle('lock'); // чтобы не было скрола из-под меню
	})

});
