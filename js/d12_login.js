$(document).ready(function(){
   $("#formLogin").submit(function(e){
    e.preventDefault();// vo hieu hoa chuc nang chuyen trang action

    //lay du lieu nhap trong form login
    // 1.lay username

    let user = $("#user").val();
    if(user != "aptech"){
        alert("Invalid username !");
        return;
    }
    //lay password

    let pass = $("#pass").val();
    if(pass != "123"){
        alert("Invalid password !");
        return;
    }

    alert("Welcome to Jquery for Beginner !");


   });


});