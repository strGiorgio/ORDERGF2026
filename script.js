const code = document.querySelector('#code');   
const labelCode = document.querySelector('#label-code');
const btnForm = document.querySelector('.btn-enter');  
const loadCircle = document.querySelector('.load-circle');
const wrapperForm = document.querySelector('.wrapper-form');

const btnUnlock = document.querySelector('#btn-unlock');
const wrapeprFirst = document.querySelector('.wrapper-first');
const wrapperSecond = document.querySelector('.wrapper-second');
const btnFirt = document.querySelector('.btn-first');
const btnSecond = document.querySelector('.btn-second');


function validator() {
    if (code.value === '5194071') {
        console.log('Código correto!');
        wrapperForm.style.display = 'none';
        loadCircle.style.display = 'block';

        setTimeout(() => {
            window.location.href = "second-page.html";
        }, 5000);
        
    } else {
        console.log('Código incorreto. Tente novamente.');
        labelCode.textContent = 'Incorreto! Tente novamente:';
    }
}

function unlock() {
    btnSecond.style.pointerEvents = 'auto';
    btnSecond.innerHTML = 'BOTÃO SECRETO';

    btnUnlock.innerHTML = 'Botão secreto destravado!';
    btnUnlock.style.pointerEvents = 'none';
    btnUnlock.style.opacity = '0.7';
}


function goToSecretPage() {
    wrapeprFirst.style.display = 'none';
    wrapperSecond.style.display = 'flex';

    btnFirt.style.backgroundColor = 'var(--color-rose)';
    btnSecond.style.backgroundColor = 'var(--color-pink3)';
}

function goToFirstPage() {
    wrapeprFirst.style.display = 'flex';
    wrapperSecond.style.display = 'none';

    btnFirt.style.backgroundColor = 'var(--color-pink3)';
    btnSecond.style.backgroundColor = 'var(--color-rose)'; 
}





// senha alterada
