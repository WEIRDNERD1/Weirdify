document.addEventListener("DOMContentLoaded", () => {
    // Update Footer Year
    const yearSpan = document.getElementById("year");
    yearSpan.textContent = new Date().getFullYear();

    // Scroll Animation Trigger
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    });
    fadeElements.forEach(el => observer.observe(el));
});
