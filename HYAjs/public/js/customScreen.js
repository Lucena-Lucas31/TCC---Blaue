const inputFile = document.querySelector("#picture__input");


const pictureImage = document.querySelector(".picture__image");
const pictureImageTxt = "Selecionar<br>Imagem";
pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];
  
  

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture__img");

      pictureImage.innerHTML = "";
      pictureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage.innerHTML = pictureImageTxt;
  }
});

// ================================================================================

const inputFile1 = document.querySelector("#picture__input1");
const pictureImage1 = document.querySelector(".picture__image1");
const pictureImageTxt1 = "Selecionar<br>Imagem";
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
        img.classList.add("picture__img1");
  
        pictureImage1.innerHTML = "";
        pictureImage1.appendChild(img);
      });
  
      reader.readAsDataURL(file1);
    } else {
      pictureImage1.innerHTML = pictureImageTxt1;
    }
  });

  // ================================================================================

const inputFile2 = document.querySelector("#picture__input2");
const pictureImage2 = document.querySelector(".picture__image2");
const pictureImageTxt2 = "Selecionar<br>Imagem";
pictureImage2.innerHTML = pictureImageTxt2;

inputFile2.addEventListener("change", function (e) {
    const inputTarget = e.target;
    const file2 = inputTarget.files[0];
     
  
    if (file2) {
      const reader = new FileReader();
  
      reader.addEventListener("load", function (e) {
        const readerTarget = e.target;
  
        const img = document.createElement("img");
        img.src = readerTarget.result;
        img.classList.add("picture__img2");
  
        pictureImage2.innerHTML = "";
        pictureImage2.appendChild(img);
      });
  
      reader.readAsDataURL(file2);
    } else {
      pictureImage2.innerHTML = pictureImageTxt2;
    }
  });

// ================================================================================

const inputFile3 = document.querySelector("#picture__input3");
const pictureImage3 = document.querySelector(".picture__image3");
const pictureImageTxt3 = "Selecionar<br>Imagem";
pictureImage3.innerHTML = pictureImageTxt3;

inputFile3.addEventListener("change", function (e) {
    const inputTarget = e.target;
    const file3 = inputTarget.files[0];
    
    
  
    if (file3) {
      const reader = new FileReader();
  
      reader.addEventListener("load", function (e) {
        const readerTarget = e.target;
  
        const img = document.createElement("img");
        img.src = readerTarget.result;
        img.classList.add("picture__img3");
  
        pictureImage3.innerHTML = "";
        pictureImage3.appendChild(img);
      });
  
      reader.readAsDataURL(file3);
    } else {
      pictureImage3.innerHTML = pictureImageTxt3;
    }
  });

// ================================================================================

const inputFile4 = document.querySelector("#picture__input4");
const pictureImage4 = document.querySelector(".picture__image4");
const pictureImageTxt4 = "Selecionar<br>Imagem";
pictureImage4.innerHTML = pictureImageTxt4;

inputFile4.addEventListener("change", function (e) {
    const inputTarget = e.target;
    const file4 = inputTarget.files[0];
    
    
  
    if (file4) {
      const reader = new FileReader();
  
      reader.addEventListener("load", function (e) {
        const readerTarget = e.target;
  
        const img = document.createElement("img");
        img.src = readerTarget.result;
        img.classList.add("picture__img4");
  
        pictureImage4.innerHTML = "";
        pictureImage4.appendChild(img);
      });
  
      reader.readAsDataURL(file4);
    } else {
      pictureImage4.innerHTML = pictureImageTxt4;
    }
  });

// ================================================================================

const inputFile5 = document.querySelector("#picture__input5");
const pictureImage5 = document.querySelector(".picture__image5");
const pictureImageTxt5 = "Selecionar<br>Imagem";
pictureImage5.innerHTML = pictureImageTxt5;

inputFile5.addEventListener("change", function (e) {
    const inputTarget = e.target;
    const file5 = inputTarget.files[0];
    
    
  
    if (file5) {
      const reader = new FileReader();
  
      reader.addEventListener("load", function (e) {
        const readerTarget = e.target;
  
        const img = document.createElement("img");
        img.src = readerTarget.result;
        img.classList.add("picture__img5");
  
        pictureImage5.innerHTML = "";
        pictureImage5.appendChild(img);
      });
  
      reader.readAsDataURL(file5);
    } else {
      pictureImage5.innerHTML = pictureImageTxt5;
    }
  });
