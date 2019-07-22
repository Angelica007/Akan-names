days = new daysMale(7);
days[0] = "Kwasi"
days[1] = "Kwadwo"
days[2] = "Kwabena"
days[3] = "Kwaku"
days[4] = "Yaw"
days[5] = "Kofi"
days[6] = "Kwame"      

days = new daysFemale(7);
days[0] = "Akosua"
days[1] = "Adwoa"
days[2] = "Abenaa"
days[3] = "Akua"
days[4] = "Yaa"
days[5] = "Afua"
days[6] = "Ama"
function myFunction(form) {
var DD = parseInt(form.day.days)
DD=document.getElementById("Day").value
if ((DD < 0) || (DD > 31)) {
alert("Check again your date!")
}
var MM = parseInt(form.month.days)
MM=document.getElementById("Month")
if ((MM < 0) || (MM > 12)) {
alert("Check again your month!")
}  
var YY = parseInt(form.year.days)
YY=document.getElementById("Year")
if (YY < 1900) {
alert("Are you sure?")
}
var gender=document.querySelector('input[name="gender"]:checked').value;
var CC = parseInt((YY-1)/(100 + 1))   
result ((((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7); 
result=document.getElementById("result")   

if (gender=="male" && days==0) {
   
}
if (gender=="male" && days==1)result.innerHTML="Kwadwo"; 
} 
