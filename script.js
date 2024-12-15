// إضافة تأثير بسيط عند التمرير
document.addEventListener('DOMContentLoaded', function () {
    const fadeElements = document.querySelectorAll('.fade-in');
    const options = { threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);

    fadeElements.forEach((el) => observer.observe(el));
});
