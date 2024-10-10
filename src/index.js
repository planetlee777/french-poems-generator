function displayPoem(response) {
	console.log("sit tight we're generating your poem");
	new Typewriter("#poem", {
		strings: response.data.answer,
		autoStart: true,
		delay: 75,
		cursor: "|",
	});
}

function generatePoem(event) {
	event.preventDefault();

	let instructionInput = document.querySelector("user-instructions");

	//build the api url
	let apiKey = "00b387dff7299ao38439d0c8a4b58f4t";
	let prompt = `User Instructions: generate a poem about ${instructionsInput.value}`;
	let context =
		"You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic aHTML. Make sure to follow the user instructions below.";
	let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
	//make a call to the api
	console.log("generating poem");
	console.log(`Prompt: ${prompt}`);
	console.log(`Context: ${context}`);

	axios.get(apiURL).then(displayPoem);
	//display the generated poem
}

let poemFormElement = document.querySelector("#poem-generator-form"); // Corrected the selector
poemFormElement.addEventListener("submit", generatePoem);
