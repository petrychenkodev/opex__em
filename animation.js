window.addEventListener('load', function(){
	const header = document.querySelector('#header-top');
	const fromLeft = document.querySelector('#buttons-from-left');
	const fromRight = document.querySelector('#buttons-from-right');
	const fromTop = document.querySelector('#buttons-from-up');

	TweenLite.fromTo(header, 1 , {y:-300, opacity:0},{y:0, opacity:1});
	TweenLite.fromTo(fromLeft, 1 , {x:-300, opacity:0},{x:0, opacity:1});
	TweenLite.fromTo(fromRight, 1 , {x:300, opacity:0},{x:0, opacity:1});
	TweenLite.fromTo(fromTop, 1 , {y:-300, opacity:0},{y:0, opacity:0.5});
}, false);
