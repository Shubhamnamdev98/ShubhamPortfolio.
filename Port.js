document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll for Navigation Links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Contact Form Submission
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission
        
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields!");
            return;
        }

        alert(`Thank you, ${name}! Your message has been sent.`);
        document.getElementById("contact-form").reset();
    });

    // Dark Mode Toggle
    let darkModeEnabled = false;
    let toggleButton = document.createElement("button");
    toggleButton.innerText = "Dark Mode";
    toggleButton.style.position = "fixed";
    toggleButton.style.bottom = "20px";
    toggleButton.style.right = "20px";
    toggleButton.style.padding = "10px";
    toggleButton.style.cursor = "pointer";
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", function () {
        darkModeEnabled = !darkModeEnabled;
        document.body.style.backgroundColor = darkModeEnabled ? "#222" : "lightgray";
        document.body.style.color = darkModeEnabled ? "white" : "#333";
        toggleButton.innerText = darkModeEnabled ? "Light Mode" : "Dark Mode";
    });

    // Skill Hover Effect
    document.querySelectorAll(".skill").forEach(skill => {
        skill.addEventListener("mouseover", function () {
            this.style.backgroundColor = "#e74c3c";
            this.style.color = "white";
        });

        skill.addEventListener("mouseout", function () {
            this.style.backgroundColor = "white";
            this.style.color = "#333";
        });
    });

    // Project Click Alert
    document.querySelectorAll(".project").forEach(project => {
        project.addEventListener("click", function () {
            alert(`You clicked on ${this.querySelector("h3").innerText}!`);
        });
    });
});
