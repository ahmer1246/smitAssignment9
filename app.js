//! Chapter NO 17-20



// ! Q NO 1 
// var MutliArray =[[[]]];

//!Q NO 2 // 

// var MutliArray =[0,1,2,3,[1,0,1,2,[2,1,0,1]]];

//!Q NO 3 // 

// for (i=0; i<=10;i++){
//     document.write(i +"<br/>");
//     }

// ! Q NO 4 //

// var userData = +prompt("write a number");
// var userLenght = +prompt("write length");


// for(i=0; i<= userLenght; i++){
//     document.write(userData, "X" , i , "=" , userData*i + "<br/>")

// }

// ! Q NO 5 //

// var friuts = ["apple","banana","mango","orange","strawberry"];

// for(i=0; i<friuts.length; i++){
//     document.write(friuts[i] + "<br/>")
// }

// for(i=0; i<friuts.length; i++){
//     document.write("Element at index ",  i ,"is ", friuts[i] + "<br/>")
// }

// ! Q NO 6 //

//! a //
// var count =[ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// document.write("Counting :" + "<br/>")
// for(i=0; i<count.length;i++){
//     document.write(count[i] ,",")
// }
// document.write("<br/>")
// document.write("<br/>")

//! b //
// document.write("Reverse Counting :" + "<br/>")
// var count1 =[ 1,2,3,4,5,6,7,8,9,10];
// var count1Rever =count1.reverse()
// for(i=0; i<count1Rever.length;i++){
  
//     document.write( count1Rever[i] ,",")
// }

// document.write("<br/>")
// document.write("<br/>")
//! c //
// document.write("Even :" + "<br/>")
// var count2 =[ 0,2,4,6,8,10,12,14,16,18,20];

// for(i=0; i<count2.length;i++){
  
//     document.write( count2[i] ,",")
// }

// document.write("<br/>")
// document.write("<br/>")

//! d //
// document.write("Odd :" + "<br/>")
// var count3 =[1,3,5,7,9,11,13,15,17,19];

// for(i=0; i<count3.length;i++){
  
//     document.write( count3[i] ,",")
// }

// document.write("<br/>")
// document.write("<br/>")

//! e //

// document.write("Series  :" + "<br/>")
// var count4 =['2k','4k','6k','8k','10k','12k','14k','16k','18k','20k'];

// for(i=0; i<count4.length;i++){
  
//     document.write( count4[i] ,",")
// }


// ! Q NO 7 //


// var Arr = [ "cake","apple pie","cookie","chips","patties"];

// var userData = prompt("Search Our backery products");

//  var ArrLength = Arr.length;

// var isFound = false;

// for (var i = 0; i < ArrLength; i++) {
//   if (Arr[i] === userData) {
//     isFound = true;
//     document.write( userData , " is avaible at index " , i , " in our bakery")
//   }
// }
// if (isFound === false) {
//     document.write( userData , " is not avaible at index " , i , " in our bakery")
// }



// ! Q NO 8 //

// var numberArr= [24,53,78,91,12];
// document.write("Array items : " , numberArr + "<br/>")
// var maxNumber = Math.max(...numberArr);
// document.write("The largest number is " ,maxNumber)

// ! Q NO 9 //

// var numberArr= [24,53,78,91,12];
// document.write("Array items : " , numberArr + "<br/>")
// var maxNumber = Math.min(...numberArr);
// document.write("The largest number is " ,maxNumber)


//! Q NO 10 //

// for (i=0;i<=20; i++ ){
//     document.write( 5*i, ",")
// }


//! CHAPTER 21 TO 25 //

//! Q NO 1 //
 
// var fname =prompt("write first name");
// var lname =prompt("write last name");

// var fullName =fname + " " + lname;
// document.write(fullName)

//! Q NO 2 //

// var user = prompt("Write your favorite phone");

// document.write("My favorite phone is : " , user + "<br/>");

// document.write("<br/>");

// var userlength= user.length;
// document.write("Length of string",userlength)


//! Q NO 3 //
 
// var country = "Pakistan";
// document.write("String : " , country);
// document.write("<br/>")
// let result = country.indexOf("n");

// document.write("index of 'n' : ",result)

//! Q NO 4 //

// var greet = "Hello World";
// document.write("String : " , greet);
// document.write("<br/>")
// let result = greet.lastIndexOf("l");

// document.write(" Last index of 'l' : ",result)

//! Q NO 5 // 

// var country = "PakistanI";
// document.write("String : " , country);
// document.write("<br/>")
// let result = country.charAt(3);
// document.write("index of 'n' : ",result)

// ! Q NO 6 //
// var fname =prompt("write first name");
// var lname =prompt("write last name");

// var fullName =fname.concat(lname)
// document.write(fullName)

//! Q NO 7 //

// var city = "Hyderabad";
// document.write("city : ", city)
// var replaceEl = city.replace( "Hyder","islam")
// document.write("<br/>")
// document.write("After replacement  :  ",replaceEl)

//! Q NO 8 //
// var message = "Ali and Sami are best friends. They play cricket and football together. ";
// document.write("message : ", message)
// document.write("<br/> ")
// var replaceEl = message.replace("and","&");
// document.write("message after replacement : ", replaceEl)

//! Q NO 9 //

// var num = "472";
// document.write("Value : ",num)
// document.write("<br/>")
// document.write("Type :",typeof(num))
// document.write("<br/>")

// document.write("Value : ",num);
// var toString = parseInt(num);
// document.write("<br/>")
// document.write("Type : ",typeof(toString))


//! Q NO 10 //

// var user = prompt("write your name in small alphabets");
// document.write("<br/>")
// document.write("User Input : " ,user);
// document.write("<br/>")
// var toUp = user.toUpperCase();
// document.write("<br/>")
// document.write("Upper Case : " , toUp)


//! Q NO 11 //

// var user = prompt("write your name in small alphabets");

// document.write("<br/>")


// document.write("User Input : " ,user);
// document.write("<br/>")
// var user1 = user[0].toUpperCase() + user.slice(1)
// document.write("<br/>")
// document.write("Upper Case : " , user1)

//! Q NO 12 // 

// var num = 35.56;
// document.write("Number : ",num);
// document.write("<br/>")
// var strin= num.toString().replace(".","");

// document.write("Result : ",strin);


//! Q NO 13 // 
// var userData =prompt("write user name");
// const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
// if (userData.match(specialChars)){
//     prompt("enter a valid username")
// }


//! Q NO 14 // 
// var userData = prompt("Welcom to ABC Bakery ,what do you want to order sir/ma'am")
// var product = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];

// var productLenght = product.length;

// var isFound =false;

// for(i=0; i<productLenght ; i++){
//     if(product[i] === userData){
//         isFound= true;
//         prompt(userData," is avaible at index of " , i ," in our backery")
//        document.write(userData," is avaible at index of " , i ," in our backery")
//     }
// }

// ! Q NO 15 // 

// var Userpass = prompt("enter password");

// var num = [0-9];
// var alpha =/[a-zA-Z]/;
// var maxNumber = Math.max(Userpass:6)

// if(Userpass.match(num)){
//     alert("ok")
// }


// ! Q NO 16 //
// var university = 'University of Karachi';
// var arr = university.split("");
// var arrLength =arr.length;

// for(i=0; i<arrLength; i++){
//     document.write(arr[i] + "<br/>")
// }




// ! Q NO 17 // 

// var user = prompt("Write country name");
// document.write(user);
// document.write("<br/>");
// document.write()



// ! Q NO 18 // 
var txt = "The quick brown fox jumps over the lazy dog";


