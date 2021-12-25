//change background colors
function changeColor(){
//create arrays of colors that should be displayed on the screen.
const colors=['blue','red','yellow','green','pink','brown','grey','orange'];
//variable that picks color randomly when bg color is  changed
let color=Math.floor(Math.random() * colors.length);
color=colors[color]
data=document.getElementById('click').style.backgroundColor = color;
console.log(data)
return data;

}




