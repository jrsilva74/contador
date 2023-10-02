var num = 0;
var menos = () => {
    num--;
    if(num < 0){
        document.getElementById("numero").style.color = "red";
    } 
    else {
        document.getElementById("numero").style.color = "black"; 
    }

    if(num > 0){
        document.getElementById("numero").style.color = "green";
    }
    document.getElementById("numero").innerHTML = num;
}

var reset = () => {
    num = 0;
    document.getElementById("numero").innerHTML = num;
    document.getElementById("numero").style.color = "black";
}

var mais = () => {
    num++;
    if(num < 0){
        document.getElementById("numero").style.color = "red";
    }
    else {
       document.getElementById("numero").style.color = "black"; 
    } 
    if(num > 0){
        document.getElementById("numero").style.color = "green";
    }
    document.getElementById("numero").innerHTML = num;
}
