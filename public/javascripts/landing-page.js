function changeTextOver(){
	var who = document.getElementsByClassName('who')[0];
	if(who.innerHTML === "Who's she?"){
		who.innerHTML = "Hello World!";
		document.getElementsByClassName('header__side--front')[0].style.cssText = 'transform:rotateY(-180deg);';
 		document.getElementsByClassName('header__side--back')[0].style.cssText = 'transform:rotateY(0deg);';
	} else {
		who.innerHTML = "Who's she?";
		document.getElementsByClassName('header__side--front')[0].style.cssText = '';
 		document.getElementsByClassName('header__side--back')[0].style.cssText = '';
	}
	
 	
}