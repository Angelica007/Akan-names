function myFunction(){
 var male=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

               
var female=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
   
var DD=document.getElementById("Day").value;
if ((DD < 0) || (DD > 31)) {
alert("Check again your date!")
}

var MM=document.getElementById("Month").value;     
if ((MM < 0) || (MM > 12)) {
alert("Check again your month!")
}  
var YY=document.getElementById("Year").value;
if (YY < 1900) {
alert("Are you sure?")
}
var CC = parseInt((YY-1)/(100 + 1));  
result=((((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7);
var gender = document.forms[0];
  var txt = "";
  var i;
  for (i = 0; i < gender.length; i++) {
        if ((gender[i].value=="male") && (result==0)){
            document.getElementById("demo").value="Your Akan name is" + male[0];
        }
        if ((gender[i].value=="male") && (result==1)){
            document.getElementById("demo").value="Your Akan name is" + male[1];
        }
        if ((gender[i].value=="male") && (result==2)){
            document.getElementById("demo").value="Your Akan name is" + male[2];
        }
        if ((gender[i].value=="male") && (result==3)){
            document.getElementById("demo").value="Your Akan name is" + male[3];
        }
        if ((gender[i].value=="male") && (result==4)){
            document.getElementById("demo").value="Your Akan name is" + male[4];
        }
        if ((gender[i].value=="male") && (result==5)){
            document.getElementById("demo").value="Your Akan name is" + male[5];
        }
        if ((gender[i].value=="male") && (result==6)){
            document.getElementById("demo").value="Your Akan name is" + male[6];
        }
      else {
           alert("Your information may be invalid!")
      }  
        if ((gender[i].value=="female") && (result==0)){
            document.getElementById("demo").value="Your Akan name is" + female[0];
        }
        if ((gender[i].value=="female") && (result==1)){
            document.getElementById("demo").value="Your Akan name is" + female[1];
        }
        if ((gender[i].value=="female") && (result==2)){
            document.getElementById("demo").value="Your Akan name is" + female[2];
        }
        if ((gender[i].value=="female") && (result==3)){
            document.getElementById("demo").value="Your Akan name is" + female[3];
        }
        if ((gender[i].value=="female") && (result==4)){
            document.getElementById("demo").value="Your Akan name is" + female[4];
        }
        if ((gender[i].value=="female") && (result==5)){
            document.getElementById("demo").value="Your Akan name is" + female[5];
        }
        if ((gender[i].value=="female") && (result==6)){
            document.getElementById("demo").value="Your Akan name is" + female[6];
        }
      else{
          alert("Your information may be invalid")
      }  
    }
}
