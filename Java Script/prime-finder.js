
// let button = document.getElementsByClassName('btn');

// button.addEventListener('click', primefinder);

function primefinder(){
    let num = parseInt(document.getElementById("prime-num").value);
    let count=0;
    for(let i=1; i<=num; i++){
        if(num % i == 0){
            count++;
        }
    }
    if(count==2){
        document.getElementById("result").value = "Prime number";
    }
    else{
        document.getElementById("result").value = "Not Prime number";

    }

}
