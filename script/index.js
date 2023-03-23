function typeWrite(e) {
	var textoArray = e.innerHTML.split("");
	e.innerHTML = " ";
	textoArray.forEach(function (letter, i) {
		setTimeout(function () {
			e.innerHTML += letter;
		}, 75 * i);
	});
}
typeWrite(document.querySelector(".typewriter"));

// ---------------------------------//

// var typed = new typed(".typewriter", {
// 	strings: ["JAVA BACKEND DEVELOPER"],
// 	typeSpeed: 75,
// 	backSpeed: 75,
// 	loop: true,
// });

//----------------------------------//

function menu() {
	class MobileNavbar {
		constructor(mobileMenu, navList, navLinks, navLinks2) {
			this.mobileMenu = document.querySelector(mobileMenu);
			this.navList = document.querySelector(navList);
			this.navLinks = document.querySelectorAll(navLinks);
			this.navLinks2 = document.querySelectorAll(navLinks2);
			this.activeClass = "active";
			this.handleClick = this.handleClick.bind(this);
			this.animateLinks();
		}

		animateLinks() {
			this.navLinks.forEach((link, index) => {
				link.style.animation
					? (link.style.animation = "")
					: (link.style.animation = `navLinkFade 0.5s ease forwards ${
							index / 7 + 0.3
					  }s`);
			});
		}

		handleClick() {
			this.navList.classList.toggle(this.activeClass);
			this.mobileMenu.classList.toggle(this.activeClass);
		}

		addClickEvent() {
			this.mobileMenu.addEventListener("click", this.handleClick);
			this.navLinks2.forEach((item) => {
				item.addEventListener("click", this.handleClick);
			});
		}

		init() {
			if (this.mobileMenu) {
				this.addClickEvent();
			}
			return this;
		}
	}
	const mobileNavbar = new MobileNavbar(
		".mobile-menu",
		".nav-list",
		".nav-list li",
		".nav-list li a"
	);
	mobileNavbar.init();
}
menu();

//----------------------------------//
