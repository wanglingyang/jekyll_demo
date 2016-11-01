var curIndex=0; 
//时间间隔 单位毫秒 
var timeInterval=4000; 
var arr=new Array(); 
arr[0]="css3.jpg"; 
arr[1]="js.jpg"; 
arr[2]="html5.jpg"; 
arr[3]="page7.jpg"; 
arr[4]="Photoshop.png";  

function changeImg() 
{ 
var obj=document.getElementById("change"); 
if (curIndex==arr.length-1) 
	{ 
		curIndex=0; 
	} 
else 
	{ 
		curIndex+=1; 
	} 
obj.src="images/"+arr[curIndex]; 
} 
setInterval(changeImg,timeInterval); 