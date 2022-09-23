let slideIndex= 0;
showSlides();

function showSlides() {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	for (i = 0; i < slides.length; i++){
		slides[i].style.display = "none"; //Ensures that the other slides are not visible
	}
	slideIndex++; //ticks our count up by one after de-visibiling all the slides
	if (slideIndex > slides.length) {
		slideIndex =1 //Sets the slide index back to 1 after it reaches the end (i.e. after we've gone through all our slides)
	}
	slides[slideIndex-1].style.display = "block";
	setTimeout(showSlides, 2000); //Changes the image every 3 seconds.
}