

const description = document.querySelector(".map-content");

/*Função responsável por ativar uma descrição flutuante */
document.querySelectorAll('path').forEach((el) =>
    el.addEventListener('mouseover', (event) => {
        event.target.className = ("enabled");
        description.classList.add("active");
        description.innerHTML = event.target.id;
    })

);

/*Função remove a descrição quando o mouse sai do elemento path*/
document.querySelectorAll('path').forEach((el) =>
    el.addEventListener("mouseout", () => {
        description.classList.remove("active");
    })
);

/*Função que segue o movimento do mouse */
document.onmousemove = function (e) {
    description.style.left = e.pageX + "px";
    description.style.top = (e.pageY - 70) + "px";
}

fetch('header.html')
.then(response => response.text())
.then(data => {
  document.getElementById('header-container').innerHTML = data;
})
.catch(error => console.error('Erro ao carregar o header:', error));

