var navBarButtonFlag = false ;

navBarButton(true);
logoPreview();
setTimeout(displayChange,6000);

function stopAnimation() {
    anime.timeline({loop: false}).add({
        targets:'.bounce',
        opacity:[1,0],
        duration: 1000,
        easing: "easeOutExpo"
    });
}
function displayChange() {
    document.getElementById("wellcomeWindow").style.display="none";
}
function logoPreview(){

    var textWrapper = document.querySelector('.wellcomeLogo');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
    anime.timeline({loop: false})
    .add({
        targets: '.wellcomeLogo .letter',
        scale: [4,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 1500,
        delay: (el,i) => 90*i
    }).add({
        targets: '.wellcomeLogo',
        opacity:[1,0],
        duration: 2000,
        easing: "easeOutExpo"
    });
    setTimeout(stopAnimation,2000);
}
function navBarButton(resize){
    let Screen = window.innerWidth;
    const navBarWindow = document.getElementById("navBar");
    const contentWindow = document.getElementById("content");
    document.getElementById("menuLogo").style.display="none";
    let array = document.getElementsByClassName("itemsMenu");
    for (let index = 0; index < array.length; index++) {
        array[index].style.display="none";
    }
    if(resize){
        navBarButtonFlag = navBarButtonFlag;
    }else{
        navBarButtonFlag = !navBarButtonFlag;
    }
    menu(navBarButtonFlag,Screen);
    if(Screen>900){
        if (navBarButtonFlag==false) {
            

            navBarWindow.style.width="5%";
            navBarWindow.style.height="100%";

            contentWindow.style.width="95%";
            contentWindow.style.height="100%";

        }else if (navBarButtonFlag==true) {

            navBarWindow.style.width="20%";
            navBarWindow.style.height="100%";

            contentWindow.style.width="80%";
            contentWindow.style.height="100%";

            setTimeout(logomenu,500);
        }
    }else{
        if (navBarButtonFlag==false) {

            navBarWindow.style.height="5%";
            navBarWindow.style.width="100%";

            contentWindow.style.height="95%";
            contentWindow.style.width="100%";

        }else if (navBarButtonFlag==true) {

            navBarWindow.style.height="20%";
            navBarWindow.style.width="100%";

            contentWindow.style.height="80%";
            contentWindow.style.width="100%";
            
            setTimeout(logomenu,500);
        }
    }
}

function menu(flag,Screen){
   const menuItems = document.getElementsByClassName("menu");
   if(Screen>900){
        for (let index = 0; index < menuItems.length; index++) {
            if(flag){
                menuItems[index].style.height="0.4rem";
                menuItems[index].style.width="3rem";
            }else{
                menuItems[index].style.height="0.4rem";
                menuItems[index].style.width="0.4rem";
            }
        }
   }else{
        for (let index = 0; index < menuItems.length; index++) {
            if(flag){
                menuItems[index].style.height="3rem";
                menuItems[index].style.width="0.4rem";
            }else{
                menuItems[index].style.height="0.4rem";
                menuItems[index].style.width="0.4rem";
            }
        }
   }
}
function itemsMenu(){
    var textWrapper = document.querySelectorAll('.itemsText');;
    for (let index = 0; index < textWrapper.length; index++) {
        textWrapper[index].innerHTML = textWrapper[index].textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    }
    anime.timeline({loop: false})
    .add({
        targets: '.itemsText .letter',
        translateY: [-100,0],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 30 * i
    }).add({
        targets: '.itemsText',
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
}
function logomenu(){
    document.getElementById("menuLogo").style.display="flex";
    let array = document.getElementsByClassName("itemsMenu");
    for (let index = 0; index < array.length; index++) {
        array[index].style.display="flex";
    }
    var textWrapper = document.querySelector('.logoText');
    textWrapper.style.font.size="";
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    itemsMenu();
    anime.timeline({loop: false})
    .add({
        targets: '.logoText .letter',
        scale: [4,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 1500,
        delay: (el,i) => 100*i
    }).add({
        targets: '.logoText',
        opacity:1,
        duration: 2000,
        easing: "easeOutExpo"
    });
}

function reDirect(directery){
    switch (directery) {
        case 'Home':
            window.location.href = "./";
            break;
        case 'ContactUs':
            break;
        case 'AboutUs':
            break;
        default:
            break;
    }
}