document.addEventListener("DOMContentLoaded", () => {
    // WhatsApp Button Interaction
    const whatsappBtn = document.querySelector(".cta a");
    whatsappBtn.addEventListener("click", () => {
        alert("Redirecting to WhatsApp to book your appointment!");
    });

    // Update Footer Year
    const yearSpan = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});
