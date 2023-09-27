function mul(){
    var n1=document.getElementById("number1").value;
    var n2=document.getElementById("number2").value;
    if(n1==="" || n2===""){
        document.getElementById("output").innerText="Enter both numbers to check";
    }
    else{
        var rev=0;
        rev=n1*n2;
    document.getElementById("output").innerText=rev;
    }
    
}
function div(){
    var n1=document.getElementById("number1").value;
    var n2=document.getElementById("number2").value;
    if(n1==="" || n2===""){
        document.getElementById("output").innerText="Enter both numbers to check";
    }
    else{
        var rev=0;
        rev=n1/n2;
    document.getElementById("output").innerText=rev;
    }
    
}
