const btnShow = document.querySelectorAll('.show');
const btnHide = document.querySelectorAll('.hide');
const codepens = document.querySelectorAll('.codepen');


const ShowCodepen = (event, i) => {
    const btn = event.target;
    const codepen = document.getElementById(`codepen-${i}`);

    if (codepen.className === 'content__nonVisible') {
        btn.innerText = `Hide`;
        codepen.classList.remove("content__nonVisible");
        return;
    }
    btn.innerText = `Show`;
    codepen.classList.add("content__nonVisible");
}

for (let i = 0; i < btnShow.length; i++) {
    btnShow[i].addEventListener("click", (event) => ShowCodepen(event, i))
}