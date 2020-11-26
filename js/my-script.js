let helloImg=document.getElementById("helloImg");
let hello=document.getElementById("hello");
let helloB=document.getElementById("helloB");
let name=document.getElementById("name");
let idName=document.getElementById("idName");
let table=document.getElementById("table");
let result=document.getElementById("result");
let ruletka=document.getElementById("ruletka");
let rulbut=document.getElementById("rulbut");
let kon=document.getElementById("kon");
let makeStavka=document.getElementById("makeStavka");
let enterStavka=document.getElementById("enterStavka");
let stayStavka=document.getElementById("stayStavka");
let makeSchet=document.getElementById("makeSchet");
let schetChild=document.getElementById("schetChild");
let enterschet=document.getElementById("enterschet");
let schet=document.getElementById("schet");
let stayschet=document.getElementById("stayschet");
let win=document.getElementById("win");
let errorstavka=document.getElementById("errorstavka");
let errorBut=document.getElementById("errorBut");
let errorshet=document.getElementById("errorschet");
let errorShet=document.getElementById("errorShet");

let ruletkaChild=ruletka.children;
let resChild=result.children;
let stavkaChild=document.getElementById("stavkaChild");
let arr = ['images/_1284-18789-removebg.png', 'images/855ae251feb9056b62bd9a431f4de532-removebg.png', 'images/загружено-removebg.png', 'images/загружено__1_-removebg.png', 'images/1352943865_1-3-removebg.png', 'images/starfish-yellow-removebg.png', 'images/monetka-removebg.png']

let reg= /\d/;
helloB.addEventListener("click",function() {
idName.innerHTML=name.value;
helloImg.style.display="none";
hello.style.display="none";
table.style.display="block";
result.style.display="block";
ruletka.style.display="block";
table.style.display="block";
rulbut.style.display="block";

})
var s=g=w=0;

stayschet.addEventListener("click", function() {
	makeSchet.style.display="block";
})
enterschet.addEventListener("click", function() {
	makeSchet.style.display="none";
	schet.innerHTML=schetChild.value;
	s=Number(schet.textContent);
	//console.log(s);

})
errorSchet.addEventListener("click", function() {
	errorschet.style.display="none";
})
stayStavka.addEventListener("click", function() {
	if (s<=0) {errorschet.style.display="block";}
		else {makeStavka.style.display="block";}
})
enterStavka.addEventListener("click", function() {
	
	makeStavka.style.display="none";
	kon.innerHTML=stavkaChild.value;
	g=Number(kon.textContent);
	schet.innerHTML=s-g;
	stavkaChild.innerHTML=0;
	//w=win.innerHTML=g*800;
	//console.log(w);

})

errorBut.addEventListener("click", function() {
	errorstavka.style.display="none";
})

rulbut.addEventListener("click", function() {

	if (g<=0) {errorstavka.style.display="block";}
else {
	
	    var timerId1 = setInterval(function() {

	
  var cartx1=parseInt(Math.random()*(arr.length-0)-0);
	    ruletkaChild[0].setAttribute("src", arr[cartx1]);
}, 100);
	    setTimeout(function() {
  clearInterval(timerId1);
  /*ruletkaChild[0].setAttribute("src", arr[cartx1]);*/
}, 3000); 
          

	    var timerId2 = setInterval(function() {
  var cartx2=parseInt(Math.random()*(arr.length-0)-0);
	    ruletkaChild[1].setAttribute("src", arr[cartx2]);
}, 100);
	    setTimeout(function() {
  clearInterval(timerId2);
  /*ruletkaChild[1].setAttribute("src", arr[cartx2]);*/
}, 4000); 
          

	    var timerId3 = setInterval(function() {
  var cartx3=parseInt(Math.random()*(arr.length-0)-0);
	    ruletkaChild[2].setAttribute("src", arr[cartx3]);
}, 100);
	    setTimeout(function() {
  clearInterval(timerId3);
  var pict1=ruletkaChild[0].getAttribute("src");
  
        var pict2=ruletkaChild[1].getAttribute("src");
        var pict3=ruletkaChild[2].getAttribute("src");
        
	    if (pict1==pict2 && pict2==pict3 && pict3==arr[0])
	     {w+=g*800; win.innerHTML=w; s+=g*800-g; schet.innerHTML=s; g=0; kon.innerHTML=g;
	    console.log(pict1);
        console.log(pict2);
        console.log(pict3);
        console.log(arr[0]);}
	    else
	    	if (pict1==pict2 && pict2==pict3 && pict3==arr[1])
	    	 {w+=g*200; win.innerHTML=w; s+=g*200-g; schet.innerHTML=s; g=0; kon.innerHTML=g;
	    	 console.log(pict1);
        console.log(pict2);
        console.log(pict3);
        console.log(arr[1]);}
	    else
          if (pict1==pict2 && pict2==pict3 && pict3==arr[2]) 
          	{w+=g*80; win.innerHTML=w; s+=g*80-g; schet.innerHTML=s; g=0; kon.innerHTML=g;
          	console.log(pict1);
        console.log(pict2);
        console.log(pict3);
        console.log(arr[2]);}
	    else
	    	if (pict1==pict2 && pict2==pict3 && pict3==arr[3]) 
	    		{w+=g*40; win.innerHTML=w; s+=g*40-g; schet.innerHTML=s; g=0; kon.innerHTML=g;
	    		console.log(pict1);
        console.log(pict2);
        console.log(pict3);
        console.log(arr[3]);}
	    else
	    	if (pict1==pict2 && pict2==pict3 && pict3==arr[4]) 
	    		{w+=g*20; win.innerHTML=w; s+=g*20-g; schet.innerHTML=s; g=0; kon.innerHTML=g;
	    		console.log(pict1);
        console.log(pict2);
        console.log(pict3);
        console.log(arr[4]);}
	    else
	    	if (pict1==pict2 && pict2==pict3 && pict3==arr[5] || pict1==pict2 && pict2==pict3 && pict3==arr[6] || pict1==pict2 && pict2==arr[6] && pict3==arr[5] || pict1==pict2 && pict2==arr[5] && pict3==arr[6] || pict1==pict3 && pict2==arr[6] && pict3==arr[5] || pict1==pict3 && pict2==arr[5] && pict3==arr[6] || pict2==pict3 && pict2==arr[6] && pict1==arr[5] || pict2==pict3 && pict2==arr[5] && pict1==arr[6]) 
	    		{w+=g*10; win.innerHTML=w; s+=g*10-g; schet.innerHTML=s; g=0; kon.innerHTML=g;
	    		console.log(pict1);
        console.log(pict2);
        console.log(pict3);
        console.log(arr[5]);}
	    else
	    	if (pict1==pict2 && pict1==arr[5] || pict1==pict2 && pict1==arr[6] || pict1==pict3 && pict3==arr[5] || pict1==pict3 && pict3==arr[6] || pict2==pict3 && pict3==arr[5] || pict2==pict3 && pict3==arr[6] || pict1==arr[5] && pict2==arr[6] || pict1==arr[6] && pict2==arr[5] || pict2==arr[5] && pict3==arr[6] || pict2==arr[6] && pict3==arr[5] || pict1==arr[5] && pict3==arr[6] || pict1==arr[6] && pict3==arr[5])
	    	 {w+=g*5; win.innerHTML=w; s+=g*5-g; schet.innerHTML=s; g=0; kon.innerHTML=g;
	    	 console.log(pict1);
        console.log(pict2);
        console.log(pict3);
        console.log(arr[5]);}
	    else
	    if (pict1==arr[5] || pict2==arr[5] || pict3==arr[5] || pict1==arr[6] || pict2==arr[6] || pict3==arr[6]) 
	    		{w+=g*2; win.innerHTML=w; s+=g*2-g; schet.innerHTML=s; g=0; kon.innerHTML=g;
	    		console.log(pict1);
        console.log(pict2);
        console.log(pict3);
        console.log(arr[5]);}
	    else {win.innerHTML=w; s=s-g; schet.innerHTML=s; g=0; kon.innerHTML=g;}
  /*ruletkaChild[2].setAttribute("src", arr[cartx3]);*/
}, 5000); 
	};
        
})
function proverka(input) {
    input.value = input.value.replace(/[^\d]/g, '');
};
function nikName(input) {
    input.value = input.value.replace(/[\d]/g, '');
};






