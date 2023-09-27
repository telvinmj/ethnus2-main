function submitForm(){
    var a=document.getElementById("name").value;
    var b=document.getElementById("email").value;
    var c=document.getElementById("website").value;
    var d=document.getElementById("message").value;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    if(a==""){
        document.getElementById("warn1").innerText="This Field is Required"
        var element = document.getElementById("name");
        element.classList.add("border");
    }
    else{
        document.getElementById("warn1").innerText="";
        var element = document.getElementById("name");
        element.classList.remove("border");
    }
    if(b==""){
        document.getElementById("warn2").innerText="A Valid Email Address is Required";
        var element = document.getElementById("email");
        element.classList.add("border");
    }
    else{
        document.getElementById("warn2").innerText="";
        var element = document.getElementById("email");
        element.classList.remove("border");
    }
    if(c==""){
        document.getElementById("warn3").innerText="A Valid URL is Required";
        var element = document.getElementById("website");
        element.classList.add("border");
    }
    else{
        document.getElementById("warn3").innerText="";
        var element = document.getElementById("website");
        element.classList.remove("border");
    }
    if(d==""){
        document.getElementById("warn4").innerText="This Field is Required";
        var element = document.getElementById("message");
        element.classList.add("border");
    }
    else{
        document.getElementById("warn4").innerText="";
        var element = document.getElementById("message");
        element.classList.remove("border");
    }
    if(a!="" && b!="" &&c!="" &&d!=""){
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("website").value="";
        document.getElementById("message").value="";
        document.getElementById("success").innerText="Your Form Has been submitted successfully";
    setTimeout(() => {
        document.getElementById("success").innerText=""
    }, 1000);
    }
    
}