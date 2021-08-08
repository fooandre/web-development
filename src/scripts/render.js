const header = document.getElementById("header")

header.innerHTML = `
<a href="./Home.html" id="logo"><img src="./../assets/images/Logo.png" alt="Logo"></a>

<nav>
<a href="Home.html#courses__list" class="header-links">Courses</a>
<a href="Contact.html" class="header-links">Get in touch</a>
<a href="Login.html" class="header-links" id="to-login">Login</a>
</nav>
`

const links = document.getElementsByClassName("header-links")

for (const link of links) {
    const currentPage = `/src/pages/${link.getAttribute("href")}`

    if (currentPage == window.location.pathname) link.setAttribute("href", "#")
}

const login = document.getElementById("to-login")

if (localStorage.getItem("logged-in") != null) login.textContent = "Profile"