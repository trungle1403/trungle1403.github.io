// Hambuger menu
const menubtn = document.querySelector('.menuBtn');
let menuOpen = false;
menubtn.addEventListener('click', () => {
    if (!menuOpen){
        menubtn.classList.add('openmenu');
        menuOpen = true;
    } else 
    {
        menubtn.classList.remove('openmenu');
        menuOpen = false;
    }
});


    // clickOpenMenu.addEventListener('click', () => {
    //     if (!click){
    //         clickOpenMenu.style.left = '0'
    //         click=true;
    //     } else 
    //     {
    //         clickOpenMenu.style.left = '-100%'
    //         click=false;

    //     }
    // })

// hambuger menu end

// scroll menu sticky 
var  lastScrollTop = 0;
   navbarHiden =document.querySelector('.navHiden');
//    navbar =document.querySelector('.menuBar');
window.addEventListener("scroll",function(){
    var scrollTop = window.pageYOffset || 
    document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop)
    {
        // navbar.style.top="-60px";
        navbarHiden.style.top="-60px";
    }
    else 
    {
        // navbar.style.top='auto';
        navbarHiden.style.top="0";
    }
    lastScrollTop =scrollTop;
})
// scroll menu sticky end

// checked event
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');
const label4 = document.getElementById('label4');
label1.classList.add('openBg');
label1.addEventListener('click', () => {
    let bg = false;
    label2.classList.remove('openBg');
    label3.classList.remove('openBg');
    label4.classList.remove('openBg');
    if (!bg){
        label1.classList.add('openBg');
        bg = true;
    } else 
    {
        bg = false;
    }
});

label2.addEventListener('click', () => {
    let bg = false;
    label1.classList.remove('openBg');
    label3.classList.remove('openBg');
    label4.classList.remove('openBg');
    if (!bg){
        label2.classList.add('openBg');
        bg = true;
    } else 
    {
        bg = false;
    }
});

label3.addEventListener('click', () => {
    let bg = false;
    label1.classList.remove('openBg');
    label2.classList.remove('openBg');
    label4.classList.remove('openBg');
    if (!bg){
        label3.classList.add('openBg');
        bg = true;
    } else 
    {
        bg = false;
    }
});

label4.addEventListener('click', () => {
    let bg = false;
    label1.classList.remove('openBg');
    label2.classList.remove('openBg');
    label3.classList.remove('openBg');
    if (!bg){
        label4.classList.add('openBg');
        bg = true;
    } else 
    {
        bg = false;
    }
});
// check event end

// scroll bar
// let progress = document.getRootNode(scrollbars);
let progress = document.querySelector('.progressBar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight)*100;
    progress.style.height = progressHeight + "%";
}
// scroll bar end
