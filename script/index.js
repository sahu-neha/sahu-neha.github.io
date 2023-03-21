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

// var typed = new typed(".typewriter", {
// 	strings: ["JAVA BACKEND DEVELOPER"],
// 	typeSpeed: 75,
// 	backSpeed: 75,
// 	loop: true,
// });

//----------------------------------//

//----------------------------------//
