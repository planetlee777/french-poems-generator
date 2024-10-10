function generatePoem(event) {
	event.preventDefault();

	new Typewriter("#poem", {
		strings: "La tombe dit à la rose",
		autoStart: true,
		delay: 75,
		cursor: "|",
	});
}

let poemFormElement = document.querySelector("#poem-generator-form"); // Corrected the selector
poemFormElement.addEventListener("submit", generatePoem);
