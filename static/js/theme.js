(() => {
    const root = document.documentElement;
    const toggle = document.querySelector("[data-theme-toggle]");
    const icon = document.querySelector("[data-theme-icon]");
    const savedTheme = localStorage.getItem("stillnote-theme");
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

    function setTheme(theme) {
        root.setAttribute("data-bs-theme", theme);
        toggle.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);
        icon.className = `bi ${theme === "dark" ? "bi-sun" : "bi-moon-stars"}`;
    }

    setTheme(savedTheme || preferredTheme);

    toggle.addEventListener("click", () => {
        const nextTheme = root.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
        localStorage.setItem("stillnote-theme", nextTheme);
        setTheme(nextTheme);
    });
})();
