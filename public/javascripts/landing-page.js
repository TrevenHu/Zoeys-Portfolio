function changeTextOver(x){
	if(x === 'about'){
		document.getElementsByClassName('logo')[0].style.cssText = 'opacity:1; animation: flyIn 2s forwards;'
		document.getElementsByClassName('header__side--front')[0].style.cssText = 'transform:rotateY(-180deg);';
		document.getElementsByClassName('header__side--back')[0].style.cssText = 'transform:rotateY(0deg);';
	} else if(x === 'home'){
		document.getElementsByClassName('logo')[0].style.cssText = 'opacity:0;'
		document.getElementsByClassName('header__side--front')[0].style.cssText = 'transform:rotateY(0);';
		document.getElementsByClassName('header__side--back')[0].style.cssText = 'transform:rotateY(180deg);';
	}
	
}

function smoothScroll(x){
    
	if(x === 'about'){
		changeTextOver(x);
	} else if(x === 'projects'){
		var anchor = document.getElementsByClassName('section-project')[0];
		anchor.style.cssText = 'display:block;';
		document.getElementById('anchor-natours').className = 'current';
		document.getElementById('anchor-yelpdemo').className = '';
		document.getElementById('anchor-little-things').className = '';
		document.getElementById('natours').style.cssText = 'display:block;'
		document.getElementById('yelpdemo').style.cssText = 'display:none;'
		document.getElementById('little-things').style.cssText = 'display:none;'
	}
	anchor.scrollIntoView({behavior:"smooth"});
}

function navToProject(x){
	window.location.href = '/project-'+x;
}

function nextProject(x) {
	var cur = document.getElementById(x);
	cur.style.cssText = 'display:none; animation:none initial;';
	document.getElementById('anchor-'+x).className = '';
	if(x === "natours"){
		var next = document.getElementById('yelpdemo');
		document.getElementById('anchor-yelpdemo').className = 'current';
	} else if(x === "yelpdemo"){
		var next = document.getElementById('little-things');
		document.getElementById('anchor-little-things').className = 'current';
	} else if(x === "little-things"){
		var next = document.getElementById('natours');
		document.getElementById('anchor-natours').className = 'current';
	}
	next.style.cssText = 'display:block; animation:slideInLeft 1s backwards;';
	var anchor = document.getElementsByClassName('section-project')[0];
    anchor.scrollIntoView({behavior:"smooth"});
}

function prevProject(x) {
	var cur = document.getElementById(x);
	cur.style.cssText = 'display:none; animation:none initial;';
	if(x === "yelpdemo"){
		var prev = document.getElementById('natours');
	} else if(x === "natours"){
		var prev = document.getElementById('little-things');
	} else if(x === "little-things"){
		var prev = document.getElementById('yelpdemo');
	}
	prev.style.cssText = 'display:block; animation:slideInRight 1s forwards;';
	var anchor = document.getElementsByClassName('section-project')[0];
    anchor.scrollIntoView({behavior:"smooth"});
}