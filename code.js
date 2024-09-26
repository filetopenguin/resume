
const darkBtn = document.querySelector('#dark-btn');
const body = document.body;

if(localStorage.getItem('dark-mode')==='enabled'){
    body.classList.add('dark-mode');
    darkBtn.textContent = 'Light Mode';
}

darkBtn.addEventListener('click',()=>{
    if(body.classList.contains('dark-mode')){
        body.classList.remove('dark-mode');
        darkBtn.textContent = 'Dark Mode';
        localStorage.setItem('dark-mode','disabled');
    }
    else{
        body.classList.add('dark-mode');
        darkBtn.textContent='Light Mode';
        localStorage.setItem('dark-mode','enabled');
    }
}
);