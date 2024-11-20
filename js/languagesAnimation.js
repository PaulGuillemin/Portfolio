document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar");

    const isElementVisible = (el) => {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    };

    const handleScroll = () => {
        console.log("Scroll event triggered");
        progressBars.forEach(bar => {
            if (isElementVisible(bar)) {
                bar.classList.add("active");

                const progress = bar.querySelector(".progress");
                progress.style.width = progress.dataset.width || "0";
            } else {
                bar.classList.remove("active");

                const progress = bar.querySelector(".progress");
                progress.style.width = "0";
            }
        });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();
});