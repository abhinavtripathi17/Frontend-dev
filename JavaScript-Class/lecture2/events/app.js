function myfun() {
    console.log("hello");
}

function myfun1() {
    console.log("hello world");
}




let btn = document.getElementById('btn');


let cnt = 0;
btn.addEventListener('click', () => {
    cnt++;
    console.log(`hello ${cnt}`);
});
