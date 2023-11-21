document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    let darkThemeEnabled = false;

    themeToggle.addEventListener("click", () => {
        darkThemeEnabled = !darkThemeEnabled;
        let body = document.getElementById("body");

        if (darkThemeEnabled) {
            body.className = "dark-theme"
            document.querySelector(".themeIcon").setAttribute('src', 'assets/img/sun.png');
        }
        else {
            body.className = "light-theme";
            document.querySelector(".themeIcon").setAttribute('src', 'assets/img/moon.png');
        }
    });
});