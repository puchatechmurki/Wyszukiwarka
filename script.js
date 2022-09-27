const search = document.querySelector(".search");
const li = document.querySelectorAll("li");

//przechwycenie tresci inputa w funkcji searchEngine:
const searchEngine = e => {
	const text = e.target.value.toLowerCase();

	//odwolanie sie do wszystkich elementow li za pomoca petli forEach:
	li.forEach(el => { //el jak element, ale może być dowolna nazwa

        const task = el.textContent //text wpisany w inpucie w zamiennej task
		if (task.toLowerCase().indexOf(text) !== -1) {//przeszukanie w inpucie indexOf, zamiana potencjalnej wielkiej litery na małą
			
			el.style.display = "block";
		} else {
			el.style.display = "none";
		}
	});
};

//nadanie listenera na wpisanie tresci do inputa
search.addEventListener("keyup", searchEngine);
