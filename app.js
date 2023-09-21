const darkModeBtn=document.querySelector(".darkmode-toggle");
console.log(darkModeBtn)
const body =document.body;
darkModeBtn.addEventListener('click',changeMode);
const nameEl =document.querySelector('.name')
// Local storagee

/**
 * add item to localstorage
 * 
 * we use setItem ('key','value')
 * 
 * 
 */

// localStorage.setItem('name','john')
// const name =localStorage.getItem('name')
// nameEl.textContent=name
// console.log(name)
let theme = localStorage.getItem('theme');
console.log(theme)
if(theme==='light'){
    enableLightMode() 
  }else{
    enableDarkMode()  
  }

function changeMode(){
    if(theme==='light'){
      enableDarkMode()  
    }else{
      enableLightMode()  
    }
   if(body.classList.contains('dark-theme')){
    darkModeBtn.innerHTML="<i class='bx bxs-sun'></i> "
   }else{
    darkModeBtn.innerHTML="<i class='bx bxs-moon'></i>"
   }
}

function enableLightMode(){
    body.classList.remove('dark-theme')
    theme='light' 
    localStorage.setItem('theme','light')
}

function enableDarkMode(){
    body.classList.add('dark-theme')
    theme='dark'
    localStorage.setItem('theme','dark')
}

// console.log(theme)