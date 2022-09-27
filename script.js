//1. Listener nasłuchuje na zamiany w inpucie
//2.e.target wskazuje na input.e.target.value wskazuje  na wartość inputa czyli tekst, który wspisujemy
//3. Zmienna li przechowuje wszystkie napoje
//4. el odnosi się do kazdego <li> na liscie

const search = document.querySelector(".search");
const li = document.querySelectorAll("li");

//przechwycenie tresci inputa w funkcji searchEngine:
const searchEngine = e => {
	const text = e.target.value.toLowerCase();

	//odwolanie sie do wszystkich elementow li za pomoca petli forEach:
	li.forEach(el => {
		//el jak element, ale może być dowolna nazwa

		if (el.textContent.toLowerCase().indexOf(text) !== -1) {
			//przeszukanie w inpucie indexOf, zamiana potencjalnej wpisanej w wyszukiwarce wielkiej litery na małą

			el.style.display = "block";
		} else {
			el.style.display = "none";
		}
	});
};

//nadanie listenera na wpisanie tresci do inputa
search.addEventListener("keyup", searchEngine);
