function fadeOutLeft(){
	
	var worklink = document.getElementById("work");

	worklink.addEventListener("click", function(){
		var homepage = document.getElementById('homepage');
		homepage.classList.add('fadeOutLeft-element');

		setTimeout(function(){
			window.location.href = "work.html";
		}, 700)
	});
	
}
fadeOutLeft();