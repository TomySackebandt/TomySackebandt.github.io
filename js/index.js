// Custom script base from https://www.w3schools.com/howto/howto_css_modal_images.asp
//make sure image have a name that start with myI
var imag = document.querySelectorAll('*[id^="myI"]');
	var b =[];
	// Get the modal
	var modal = document.getElementById("myModal");
	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById("myImg");
	
	for(var i=0;i<imag.length;i++)
	{
		b.push (imag[i]);
	}	
	
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");

	for (var j=0;j<b.length;j++)
	{
		b[j].onclick = function(){
		  modal.style.display = "block";
		  modalImg.src = this.src;
		  captionText.innerHTML = this.alt;
		}
	}
	
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	  modal.style.display = "none";
	}