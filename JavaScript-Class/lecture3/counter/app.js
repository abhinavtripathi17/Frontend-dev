


let count = document.getElementById('count');
let inc = document.getElementById('inc');
let dec = document.getElementById('dec');
let two = document.getElementById('plustwo');


let counter = 0;

function increment(){
    counter++;
    count.textContent = counter;
}

function decrement(){
    counter--;
    count.textContent = counter;
}

function plustwo(){
    counter += 2;
    count.textContent = counter;
}

inc.addEventListener('click' , increment);
dec.addEventListener('click' , decrement);
two.addEventListener('click' , plustwo);


