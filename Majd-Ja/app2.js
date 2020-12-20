const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".container img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

previews.forEach((preview) =>{
    preview.addEventListener("click", () => {
        modal.classList.add("open");
        original.classList.add("open");
        //change text and img everyclick
        const originalSrc = preview.getAttribute("data-original");
        original.src = `./Ornaments/${originalSrc}`;
        const altText = preview.alt;
        caption.textContent = altText;
    });
});

modal.addEventListener("click", (e) => {
    if(e.target.classList.contains("modal")){
        modal.classList.remove("open");
        original.classList.remove("open");
    }
});

// original.addEventListener('mousemove', function (e){
//     let width = original.offsetWidth;
//     let height = original.offsetHeight;
//     let mouseX = e.offsetX;
//     let mouseY = e.offsetY;

//     let imgPosX = (mouseX / width * 100);
//     let imgPosY = (mouseY / height * 100);

//     original.style.previewsPosition = `${imgPosX}% ${imgPosY}`;

// });