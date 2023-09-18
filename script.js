document.addEventListener("DOMContentLoaded", () => {
    const getDogImageButton = document.getElementById("getDogImage");
    const dogImageContainer = document.getElementById("dogImageContainer");

    getDogImageButton.addEventListener("click", () => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    const imageUrl = data.message;
                    const img = document.createElement("img");
                    img.src = imageUrl;
                    dogImageContainer.innerHTML = "";
                    dogImageContainer.appendChild(img);
                } else {
                    console.error("Falha ao obter imagem de cachorro.");
                }
            })
            .catch(error => {
                console.error("Erro ao buscar a API:", error);
            });
    });
});