
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

function enlargeImage(img) {
    var modal = document.getElementById("image-modal");
    var modalImg = document.getElementById("modal-image");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

function closeModal() {
    var modal = document.getElementById("image-modal");
    modal.style.display = "none";
}
