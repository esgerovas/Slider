
$(document).ready(function($) {
	
// variables---------------
	var imgs = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg','img/8.jpg','img/9.jpg','img/10.jpg','img/11.jpg','img/12.jpg'];
	var slider_height = $('#slider').height(),
		slider_width = $('#slider').width(),
		slider_count=imgs.length,
		animationSpeed=1000,
		pause=3000,
		currentSlide=1;

// created Elements-----------
	$('#slider')
	.append('<ul class="slides"></ul>')
	$('#slider .slides')
		.append('<li class="slide"><img src="'+imgs[imgs.length-1]+'"></li>');
	for(var i=0;i<imgs.length;i++){
		$('#slider .slides')
		.append('<li class="slide"><img src="'+imgs[i]+'"></li>');
	}
	$('#slider .slides')
		.append('<li class="slide"><img src="'+imgs[0]+'"></li>');

	$('#slider')
	.append('<a class="next"><i class="fa fa-angle-right " aria-hidden="true"></i></a>')
	.append('<a class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></a>')
// CSS Styles-----------------
	$('#slider .slides')
	.css({
		width: (slider_count+2)*slider_width,
		height: slider_height,
		display:'block',
		margin:'0',
		padding:'0',
		marginLeft:-1*slider_width
	});
	$('#slider .slide')
	.css({
		width: slider_width,
		height: slider_height,
		float:'left',
		listStyleType: 'none'
	});

$('#slider .next, #slider .prev')
	.css({
		position: 'absolute',
		display:'block',
		width:'50px',
		height:'35px',
		top: '45%',
		color:'white',
		fontSize:'30px',
		lineHeight:'30px',
		cursor:'pointer',
		transition:'all 1s ease',
		textAlign:'center',
		zIndex:'500'
	})
	.hover(function() {
		$(this).css({
			backgroundColor:'grey'
		});
	}, function() {
		$(this).css({
			backgroundColor:'transparent'
		});
	});
//Calling functions---------------
	$('#slider .next')
	.css({
		right: '0px'
	})
	.on('click', function() {
		next()
	});

	$('#slider .prev')
	.css({
		left: '0px'
	})
	.on('click', function() {
		prev()
	});

// Private Functions--------------Next function

	function next(){
		$('#slider .slides').animate({
			'margin-left': '-='+slider_width},
			animationSpeed, function() {
				currentSlide++;
				if(currentSlide==slider_count+1){
					currentSlide=1;
					$(this).css({
						'margin-left':-1*slider_width
					});
				}
			});	
	}	

// Private Functions--------------Prev function
	function prev(){
		$('#slider .slides').animate({
			'margin-left': '+='+slider_width},
			animationSpeed, function() {
				currentSlide--;
				if(currentSlide==0){
					currentSlide=slider_count;
					$(this).css({
						'margin-left': -1*(slider_count)*slider_width
					});
				}
			});	
		
	}


});





