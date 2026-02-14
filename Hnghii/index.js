document.addEventListener("DOMContentLoaded", () => {
    const envelopeWrapper = document.querySelector(".envelope-wrapper");
    const heart = document.querySelector(".heart");

    heart.addEventListener("click", () => {
        envelopeWrapper.classList.add("flap");
    });
});
