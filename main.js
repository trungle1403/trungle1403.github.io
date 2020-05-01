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
