import { pageLoad } from "./pageload.js";
import { createMenuPage } from "./menu.js";
import { createContactPage } from "./contact.js";

const tabs = document.querySelectorAll('.tab');
const contentContainer = document.getElementById('content');

contentContainer.appendChild(pageLoad());

tabs.forEach((tab) => {
    tab.addEventListener('click', (event) => {
        contentContainer.innerHTML = '';

        if (event.target.id === 'home-tab'){
            contentContainer.appendChild(pageLoad());
        } else if (event.target.id === 'menu-tab'){
            contentContainer.appendChild(createMenuPage());
        } else if (event.target.id === 'contact-tab'){
            contentContainer.appendChild(createContactPage());
        }
    });
});