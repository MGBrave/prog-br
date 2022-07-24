let image = document.getElementById("like");

image.addEventListener("click", function () {

    let lastImage = image.getAttribute("src");
    
    image.setAttribute("src", "./img/down.png")

    console.log(lastImage);

})
