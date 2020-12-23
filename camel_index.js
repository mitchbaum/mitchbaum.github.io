
// highlight current page
var btnContainer = document.getElementById("myNavbarLinks");
var btns = btnContainer.getElementsByClassName("nav-item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}




//arrow through and scroll through images 
var scrollContainer = function(container, direction) {
		var amount = direction * container.clientWidth;
		container.scrollLeft+=amount; 
	}

	var sliderContainer = document.getElementById('slider');

	var leftArrow = document.querySelector(".leftArrowBtn");
	leftArrow.addEventListener('click', function(){
		scrollContainer(sliderContainer, -1);
	});
	
	var rightArrow = document.querySelector(".rightArrowBtn");
	rightArrow.addEventListener('click', function(){
		scrollContainer(sliderContainer, 1);
	});
	
	
