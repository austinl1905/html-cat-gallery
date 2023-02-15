const spoilerImage = document.getElementById("spoiler-image");
const spoilerText = document.getElementById("spoiler-text");
spoilerImage.addEventListener("click", clickFunction);

function clickFunction() {
    spoilerImage.style.filter = "blur(0rem)";
    spoilerText.style.display = "none";
}