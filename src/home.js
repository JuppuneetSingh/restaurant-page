import restaurantImage from "./assets/restaurant.jpg";

function loadHome() {
    const content = document.querySelector("#content");

    const home = document.createElement("div");
    home.classList.add("home");

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to The Golden Fork";

    const image = document.createElement("img");
    image.src = restaurantImage;
    image.alt = "Our restaurant";

    const paragraph = document.createElement("p");
    paragraph.textContent =
        "Welcome to our restaurant! We serve delicious food made with fresh ingredients.";

    home.appendChild(heading);
    home.appendChild(image);
    home.appendChild(paragraph);

    content.appendChild(home);
}

export default loadHome;