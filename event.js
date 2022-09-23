navbtn = document.querySelector('.navbtn')
navbtn1 = document.querySelector('.navbtn')
line1 = document.querySelector('.one')
line2 = document.querySelector('.two')
line3 = document.querySelector('.three')
navlist = document.querySelector('.mynav-list')
navbar = document.querySelector('.mynavbar')


navbtn.addEventListener('click',()=>{
    navlist.classList.toggle('display-N');
    navbar.classList.toggle('height-N');
    navbtn1.classList.toggle('navbtn1');
    line1.classList.toggle('line1');
    line2.classList.toggle('line1');
    line3.classList.toggle('line1');
})


// scroll button
// var scrolll = document.getElementById('scrolll')

// scrolll.onclick = function () {
//     var container = document.getElementById('scroll2');
//     sideScroll(container,'left',25,100,10);
// };
function scrollr() {
    var container = document.getElementById('scroll2');
    // sideScroll(container,'left',0,350,5);
    container.scrollLeft -=309;
}
function scrolll() {
    var container = document.getElementById('scroll2');
    // sideScroll(container,'right',0,350,5);
    container.scrollLeft +=309;
}
// alternate
// function sideScroll(element,direction,speed,distance,step){
//     scrollAmount = 0;
//     var slideTimer = setInterval(function(){
//         if(direction == 'left'){
//             element.scrollLeft -= step;
//         } else {
//             element.scrollLeft += step;
//         }
//         scrollAmount += step;
//         if(scrollAmount >= distance){
//             window.clearInterval(slideTimer);
//         }
//     }, speed);
// }