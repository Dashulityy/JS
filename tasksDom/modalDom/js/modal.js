const openButton = document.getElementById("openModal");
const body = document.body;
const text = "The message has been sent, thank you!";
function openModal(){
    body.appendChild(createModal(text));
}
function createModal(content){
    const overlayBlock = document.createElement("div");
    overlayBlock.classList.add("overlay");
    
    const containerModal = document.createElement("div");
    containerModal.classList.add("container__modal");

    const contentBlock = document.createElement("div");
    contentBlock.classList.add("content");

    contentBlock.innerHTML = content;

    const closeElement = document.createElement("a");
    closeElement.classList.add("close");
    closeElement.textContent = "x";
    closeElement.href = "#";

    overlayBlock.appendChild(containerModal);
    containerModal.appendChild(closeElement);
    containerModal.appendChild(contentBlock);

    overlayBlock.addEventListener("click", (e) => {
        e.preventDefault();
        body.removeChild(overlayBlock);
    });

    closeElement.addEventListener("click", (e) => {
        e.preventDefault();
        body.removeChild(overlayBlock);
    });

    return overlayBlock;
}