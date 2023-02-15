const spoilerImage = document.getElementById("spoiler-image");
spoilerImage.addEventListener("click", clickFunction);

function clickFunction() {
    spoilerImage.style.filter = "blur(0rem)";
}