function runInfo() {//The function runInfo initiates the onclick sumbit  
var firstName = document.getElementById("fName").value;//The variable gets the first name from input box 1
var lastName = document.getElementById("lName").value;//The variable get the last name from input box 2
var badNum = document.getElementById("bNum").value;//The variable gets the badge number from input box 3
var fullName = firstName + " " + lastName;//variable add the first and last name together to indicate the correct value
if(fullName.length > 20 || fullName.length < 5) {//Tells if the Name length is accepted or not 
    document.getElementById("status").innerHTML = "Name is not valid!";//When not accepted tells the user not valid
}
else if (badNum > 999 || badNum < 100 ) {//Tells if the badge number is accepted or not
    document.getElementById("status").innerHTML = "Badge Numer is not valid";//When not accepted tells user not valid
}
else {//When accepted tell user acess granted
    alert("Access Granted, Hello Welcome " + fullName + "!");
    location.replace("dataloader1.html");//After log in is complete goes to the next html
}

}
