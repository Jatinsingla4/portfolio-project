const themetoggle = document.querySelector('#theme-toggle');
console.log(themetoggle);
const htmlElement =document.documentElement;
themetoggle.addEventListener('click',() =>{
    console.log('theme toggle switch was clicked!');
    const newTheme = themetoggle.checked ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme',newTheme);
    localStorage.setItem('theme',newTheme);
});
(() =>{

    const saveTheme = localStorage.getItem('theme')
    if(saveTheme)
    {
        htmlElement.setAttribute('data-theme',saveTheme)
    }
    if(saveTheme==='dark'){
        themetoggle.checked = true;
    }
})();
