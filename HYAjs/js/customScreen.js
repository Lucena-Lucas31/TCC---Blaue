const inputFile = document.querySelector('.pictureInput');
const pictureImage = document.querySelector('.pictureImage');
const pictureImageText = "Escolha uma Imagem";
pictureImage.innerHTML = pictureImageText;

inputFile.addEventListener("change", function(e){
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if(file){
        const reader = new FileReader();

        reader.addEventListener('load', function(e){
            const readerTarget = e.target;

            const img = document.createElement('img');
            img.src = readerTarget.result;
            img.classList.add('pictureImg');

            pictureImage.innerHTML = "";
            pictureImage.appendChild(img);
        });

        reader.readAsDataURL(file);
    } else {
        pictureImage.innerHTML = pictureImageText;
    }
   
});


