function hello(){
    var f=document.getElementById("number").value;
    if(f===""){
        document.getElementById("output").innerText="Enter a number to check";
        console.log(f)
    }
    else{
        var rev=0;
    while(f>=1){
        rev*=10;
        rev+=f%10;
        f=Math.floor(f/10);
        //console.log(f);
    }
    //console.log("rev:"+rev);
    document.getElementById("output").innerText=rev;
    }
    
}