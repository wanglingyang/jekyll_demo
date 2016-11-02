function showTime(){
var d=new Data();
var year=d.getFullYear();
var month=d.getMonth()+1;
var day=d.getDate();
document.getElementById("content2_3").innerHTML=(year+"/"+month+"/"+day);
}

window.onload=showTime();

