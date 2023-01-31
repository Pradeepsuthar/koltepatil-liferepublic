import headerComponent from "./components/Header.js";
import footerComponent from "./components/Footer.js";

const header = headerComponent();
const footer = footerComponent();

document.getElementById("header").innerHTML = header;
document.getElementById("footer").innerHTML = footer;
