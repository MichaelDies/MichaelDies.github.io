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
        original.src = `./Crosses-Main/${originalSrc}`;
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
