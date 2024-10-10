function displayPoem(response) {
	console.log("sit tight we're generating your poem");

	// Display the poem with Typewriter effect as it is
	new Typewriter("#poem", {
		strings: response.data.answer, // Display the response directly
		autoStart: true,
		delay: 80,
		cursor: "|",
	});
}

function generatePoem(event) {
	event.preventDefault();

	let instructionsInput = document.querySelector("#user-instructions");

	// Hide poem element initially
	let poemElement = document.querySelector(".poem");
	poemElement.classList.add("hidden");

	// Display "generating" message
	poemElement.innerHTML = `<div class="generating">⏳ generating the french poem for you about ${instructionsInput.value}</div>`;
	poemElement.classList.remove("hidden");

	// Build the API URL
	let apiKey = "00b387dff7299ao38439d0c8a4b58f4t"; // Replace with correct API key
	let prompt = `User Instructions: generate a 4-line french poem about ${instructionsInput.value}`;
	let context =
		"You are a romantic poem expert and love to write short poems. Your mission is to generate a 4-line poem. Please make sure to separate every line with a <br />. Sign the poem as SheCodes AI at the very bottom and use <strong>. Please make sure to follow User instructions";
	let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

	// Make a call to the API
	console.log("generating poem...");
	axios.get(apiURL).then(displayPoem);
}

// Add event listener for form submission
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
