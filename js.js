var daysMale=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var days = daysMale[0];
           daysMale[1];
           daysMale[2];
           daysMale[3];
           daysMale[4];
           daysMale[5];
           daysMale[6];     
var daysFemale=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var days = daysFemale[0];
           daysFemale[1];
           daysFemale[2];
           daysFemale[3];
           daysFemale[4];
           daysFemale[5];
           daysFemale[6];
function myFunction(form){
    
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
console.log(gender);
var CC = parseInt((YY-1)/(100 + 1))   
result ((((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7); 
result=document.getElementById("result")   

if (gender=="male" && days==0) {
   
}
if (gender=="male" && days==1){

} 
} 
