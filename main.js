// counter design 

document.addEventListener("DOMContentLoaded", () => {
function counter(id, start, end, duration){
    let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
        current+= increment;
        obj.textContent = current;
        if(current == end){
            clearInterval(timer);
        }
    }, step) 
}
counter("count1",0,1235, 2000);
counter("count2",110,5235, 2500);
counter("count3",0,1495, 7000);
counter("count4",0,5237, 3000);
});