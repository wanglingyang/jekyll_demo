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
setInterval(setTab(1,0),timeInterval); 
//标签页
function setTab(m,n){  
  
 var tli=document.getElementById("menu"+m).getElementsByTagName("li");  
  
 var mli=document.getElementById("main"+m).getElementsByTagName("ul");  
  
 for(i=0;i<tli.length;i++){  
  
  tli[i].className=i==n?"hover":"";  
  
  mli[i].style.display=i==n?"block":"none";  
  
 }  
}  