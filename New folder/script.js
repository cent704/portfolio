r
// MOBILE MENU

function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("active");

}


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function () {

        document.querySelector(".nav-links").classList.remove("active");

    });

});


// CONTACT FORM

function sendMessage(event) {

    event.preventDefault();

    alert("Thank you for contacting me!");

    event.target.reset();

}

