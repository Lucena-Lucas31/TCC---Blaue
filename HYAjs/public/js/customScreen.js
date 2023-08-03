const inputFile = document.querySelector("#pictureInput");
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

// ===========================================================================================

const inputFile1 = document.querySelector("#pictureInput1");
const pictureImage1 = document.querySelector(".pictureImage1");
const pictureImageTxt1 = "Escolha uma imagem";
pictureImage1.innerHTML = pictureImageTxt1;

inputFile1.addEventListener("change", function (e) {
    const inputTarget = e.target;
    const file1 = inputTarget.files[0];
    
    
  
    if (file1) {
      const reader = new FileReader();
  
      reader.addEventListener("load", function (e) {
        const readerTarget = e.target;
  
        const img = document.createElement("img");
        img.src = readerTarget.result;
        img.classList.add("pictureImg1");
  
        pictureImage1.innerHTML = "";
        pictureImage1.appendChild(img);
      });
  
      reader.readAsDataURL(file1);
    } else {
      pictureImage1.innerHTML = pictureImageTxt1;
    }
  });




