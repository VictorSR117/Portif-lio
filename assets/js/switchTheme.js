document.addEventListener("DOMContentLoaded", () => {
    let darkThemeEnabled = false;

    document.getElementById("themeToggle").addEventListener("click", () => {
        darkThemeEnabled = !darkThemeEnabled;
        const body = document.getElementById("body");
        const cards = document.querySelectorAll(".card-content");

        if (darkThemeEnabled) {
            body.classList.toggle("dark-theme");
            body.classList.toggle("light-theme");
            // cards.forEach(card => {
            //     card.classList.remove("light-card");
            //     card.classList.add("dark-card");
            // });
            document.querySelector(".themeIcon").setAttribute('src', 'assets/img/sun.png');
        }
        else {
            body.classList.toggle("dark-theme");
            body.classList.toggle("light-theme");
            // cards.forEach(card => {
            //     card.classList.remove("dark-card");
            //     card.classList.add("light-card");
            // });
            document.querySelector(".themeIcon").setAttribute('src', 'assets/img/moon.png');
        }
    });
});
