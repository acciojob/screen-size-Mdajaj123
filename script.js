//your JS code here. If required.
window.addEventListener("resize" ,()=>{
	let width=window.innerWidth;
	let height=window.innerHeight;
	let div=document.getElementById("sizeInfo");
	div.innerHTML=`<h1>width: ${width} and Height: ${height}</h1>`
})