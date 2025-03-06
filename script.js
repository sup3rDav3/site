document.addEventListener("DOMContentLoaded", () => {
    const services = document.querySelectorAll(".service");
    services.forEach((service, index) => {
        setTimeout(() => {
            service.style.opacity = 1;
            service.style.transform = "translateY(0)";
        }, index * 300);
    });

    document.getElementById("learnMore").addEventListener("click", () => {
        window.location.href = "#services";
    });
});
