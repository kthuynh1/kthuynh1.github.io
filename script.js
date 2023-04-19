//katie huynh project
function view() {
	let plans = document.getElementById("plans");
	let words = document.getElementById("words");
	let viewless = document.getElementById("viewless");
	
	if(plans.classList.contains("hidden")){
		plans.classList.remove("hidden");
		words.classList.remove("hidden");
		viewless.innerHTML="view less";
	}
	else{
		plans.classList.add("hidden");
		words.classList.add("hidden");
		viewless.innerHTML = "view more";
	}
}

//quiz
function showAnswer() {
	let one = document.getElementById("one").value;
	let two = document.getElementById("two").value;
	let three = document.getElementById("three").value;
	let four = document.getElementById("four").value;
	let result = document.getElementById("result");
	let string = "";
	total = 0;
	
	console.log(two);
	
	if (one == "gives additional information about an element") {
		string += "<p> question 1 - correct </p>";
		total++;
	}
	else{
		string += "<p> question 1 - incorrect </p>";
	}
	
	if (two == "<header>"){
		string += "<p> question 2 - correct </p>";
		total++;
	}
	else{
		string += "<p> question 2 - incorrect </p>";
	}
	
	if (three == "<h1>") {
		string += "<p> question 3 - correct </p>";
		total++;
	}
	else{
		string += "<p> question 3 - incorrect </p>";
	}
	
	if (four == "<!-- ... -->"){
		string += "<p> question 4 - correct </p>";
		total++;
	}
	else{
		string += "<p> question 4 - incorrect </p>";
	}
	
	result.innerHTML += string;
	result.innerHTML += "<p>" + total + "/4</p>";
}

//slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
	let i;
	let slides = document.getElementsByClassName("slide");
	
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
		
	}
	
	slideIndex++;
	
	if (slideIndex > slides.length) {slideIndex = 1}
	slides[slideIndex-1].style.display = "block";
	setTimeout(showSlides, 10000);
}