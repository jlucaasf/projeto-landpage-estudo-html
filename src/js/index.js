
// pegar o elemento do botão de 'veja o trailer' 

const botaoTrailer = document.querySelector(".botao-trailer");
console.log(botaoTrailer);
const video = document.getElementById("video");
const linkDoVideo = video.src;
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");



function alternarModal() {
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    console.log('Clicou no Botão');
    //modal.classList adiciona uma clase a div modal para abrir a modal.
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    console.log('CLicou no X');
    alternarModal();
    video.setAttribute("src", "");

});










