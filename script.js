const img = document.querySelectorAll('.imgs');
const pratos = document.querySelectorAll('.pratos');
const textos = document.querySelectorAll('.paragrafos');

textos.forEach((paragrafos) => {
    paragrafos.style.display = "none";
});


pratos.forEach((prato, index) => {
    
    prato.addEventListener("mouseenter", ()=> {

        img[index].style.width = "13.75rem";
        img[index].style.height = "12.5rem";

        textos[index].style.display = "block";

    });


    prato.addEventListener("mouseleave", () => {

        img[index].style.width = "12.5rem";
        img[index].style.height = "11.25rem";

        textos[index].style.display = "none";
        
    });
});


//teste de rolagem interativa

