function loadContact() {
    const content = document.querySelector("#content");

    const heading = document.createElement("h1");
    heading.textContent = "Contact Us";

    const phone = document.createElement("p");
    phone.textContent = "Phone: 9876543210";

    const address = document.createElement("p");
    address.textContent = "Address: 123 Food Street, Chandigarh";

    const email = document.createElement("p");
    email.textContent = "Email: hello@goldenfork.com";

    content.appendChild(heading);
    content.appendChild(phone);
    content.appendChild(address);
    content.appendChild(email);
}

export default loadContact;