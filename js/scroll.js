(function(){

function scroller() {

  var scroll = $('div.scroll');// Sets the div with a class of scroll as a variable
  
  var height = scroll.height(); // Gets the height of the scroll div
  
  var topAdj = -height-100;
	
	scroll.animate({
		'top' : [topAdj, 'linear'] 
	}, 10000, function(){
		scroll.css('top', 0); //resets the top position of the Ul for the next cycle
		scroller(); // Recalls the animation cycle to begin.
	});}
	
scroller();

})();