
         
function myFunction(){
 var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

               
var female=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

var gender = document.querySelector('input[name="gender"]').value;

var DD=document.getElementById("Day").value;
if ((DD < 0) || (DD > 31)) {
alert("Check again your date!")
}

var MM=document.getElementById("Month").value;     
if ((MM < 0) || (MM > 12)) {
alert("Check again your month!")
}  
else{
    alert("Your date is invalid!")
}

var YY=document.getElementById("Year").value;
if (YY < 1900) {
alert("Are you sure?")
}   
else{
    alert("Your date is invalid!")
}
function calculateDayOfWeek(DD,MM,YY) {
    DD = parseFloat(DD);
    MM = parseFloat(MM);
    MM = parseFloat(YY);
    CC = parseFloat(((YY-1)/100 + 1));
    var result= ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7;
    console.log(result);
}
if ((gender == "male") && (result==0)){
document.getElementById("demo")=maleNames[0];
}
if ((gender=="male") && (result==1)){
    document.getElementById("demo")=maleNames[1];
}
if ((gender=="male") && (result==2)){
    document.getElementById("demo")= maleNames[2];
}
if ((gender=="male") && (result==3)){
    document.getElementById("demo")=maleNames[3];
}
if ((gender=="male") && (result==4)){
    document.getElementById("demo")=maleNames[4];
}
if ((gender=="male") && (result==5)){
    document.getElementById("demo")=maleNames[5];
}
if ((gender=="male") && (result==6)){
    document.getElementById("demo")=maleNames[6];
}
else {
   alert("Your information may be invalid!")
}  
if ((gender.value=="female") && (result==0)){
    document.getElementById("demo")=female[0];
}
if ((gender.value=="female") && (result==1)){
    document.getElementById("demo")=female[1];
}
if ((gender.value=="female") && (result==2)){
    document.getElementById("demo")=female[2];
}
if ((gender.value=="female") && (result==3)){
    document.getElementById("demo")=female[3];
}
if ((gender.value=="female") && (result==4)){
    document.getElementById("demo")=female[4];
}
if ((gender.value=="female") && (result==5)){
    document.getElementById("demo")=female[5];
}
if ((gender.value=="female") && (result==6)){
    document.getElementById("demo")=female[6];
}
else{
  alert("Your information may be invalid")
}  
}
