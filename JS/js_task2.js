function hello(){
    var f=document.getElementById("string").value;
    if(f===""){
        document.getElementById("output").innerText="Enter string to check";
    }
    else{
        var arr=f.split('');
        for(var i=0;i<arr.length;i++){
            for(var j=i;j<arr.length;j++){
                if(arr[i]>arr[j]){
                    var tmp=arr[i];
                    arr[i]=arr[j];
                    arr[j]=tmp;
                }
            }
        }
    var final=arr.join('');
    document.getElementById("output").innerText=final;
    }
    
}