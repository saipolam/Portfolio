// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Certificate search filter
function filterCertificates() {
    const input = document.getElementById("filter-input").value.toUpperCase();
    const certificates = document.querySelectorAll(".certificate");

    certificates.forEach((cert) => {
        const altText = cert.alt.toUpperCase();
        cert.style.display = altText.includes(input) ? "" : "none";
    });
}

// Enlarge certificate image
function enlargeImage(img) {
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.onclick = () => overlay.remove();

    const enlargedImg = document.createElement("img");
    enlargedImg.src = img.src;
    enlargedImg.classList.add("enlarged-image");

    overlay.appendChild(enlargedImg);
    document.body.appendChild(overlay);
}

// Animate skill bars on scroll
window.addEventListener('scroll', () => {
    document.querySelectorAll('.progress-bar').forEach((bar) => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            bar.style.width = bar.getAttribute('data-progress');
        }
    });
});
