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








checkbox1 = document.getElementById('conducted1');

checkbox1.addEventListener('change', e => {

    if(checkbox1.checked){
        document.getElementById('location').style.display="none";
        document.getElementById('location').style.width="0%";

    }
    else{
        // document.getElementById('location').style.display="block";
        document.getElementById('location').removeAttribute("style")
    }  

});


checkbox2 = document.getElementById('conducted2');

checkbox2.addEventListener('change', e => {

    if(checkbox2.checked){
        // document.getElementById('location').style.display="none";
            let input=document.getElementsByClassName('input1');
            for(let i=0;i<input.length;i++){
                input[i].style.width="48%";
            }
    }
    else{
        // document.getElementById('location').style.display="block";
            let input=document.getElementsByClassName('input1');
            for(let i=0;i<input.length;i++){
                input[i].removeAttribute("style")
            }
            document.getElementByClassName('input-box').removeAttribute("style")


    }

});






function scrollr1() {
    var container = document.getElementById('scroll1');
    // sideScroll(container,'left',0,350,5);
    container.scrollLeft -=309;
}
function scrolll1() {
    var container = document.getElementById('scroll1');
    // sideScroll(container,'right',0,350,5);
    container.scrollLeft +=309;
}
function scrollr2() {
    var container = document.getElementById('scroll2');
    // sideScroll(container,'left',0,350,5);
    container.scrollLeft -=309;
}
function scrolll2() {
    var container = document.getElementById('scroll2');
    // sideScroll(container,'right',0,350,5);
    container.scrollLeft +=309;
}
function scrollr3() {
    var container = document.getElementById('scroll3');
    // sideScroll(container,'left',0,350,5);
    container.scrollLeft -=309;
}
function scrolll3() {
    var container = document.getElementById('scroll3');
    // sideScroll(container,'right',0,350,5);
    container.scrollLeft +=309;
}