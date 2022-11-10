document.getElementById("btn").addEventListener("click", MyFunction);
let selectnumber = document.getElementById("guessnumber");
let index =0;


function MyFunction(){
index++;
let _number = parseInt(selectnumber.value)
let random = Math.floor(Math.random() * 100) + 0;


   
    if(_number==random){
        document.getElementById("result").innerHTML = "You won";
    }
    if(_number<random && _number>0){
        document.getElementById("result").innerHTML = "To low";
    }

    if(_number>random && _number<100){
        document.getElementById("result").innerHTML = "To high";
    }

     if (index==5){
        document.getElementById("result").innerHTML = "Game over";
    
    }

   

 
}

