let value = 0; 


window.onload = () => {
    let counter = document.getElementById("numero"); 

    const decrease = document.getElementById("menos"); 
    const zerar = document.getElementById("reset"); 
    const increase = document.getElementById("mais"); 

    let interval

    decrease.addEventListener ('click', function() {
        clearInterval(interval);

        interval = setInterval( function(){
            value--;  
            counter.innerText = value;
        }, 500)
    }); 

    zerar.addEventListener ('click', function(){
        clearInterval(interval);
            value = 0;
            counter.innerText = value;
    }); 


    increase.addEventListener ('click', function(){
        clearInterval(interval);

        interval = setInterval (function () {
            value++;
            counter.innerText = value;
        }, 500)
    }); 

}
