import { pageLoad } from "./pageload.js";
import { createMenuPage } from "./menu.js";
import { createContactPage } from "./contact.js";

const tabs = document.querySelectorAll('.tab');
const contentContainer = document.getElementById('content');
let activeTab = null;

function setActiveTab(tab) { // Pass the 'tab' as a parameter
    if (activeTab) {
        activeTab.classList.remove('active');
    }
    tab.classList.add('active');
    activeTab = tab;
};

(function loadHomePage () {
    contentContainer.innerHTML = '';
    contentContainer.appendChild(pageLoad());
    const homeTab = document.getElementById('home-tab');
    setActiveTab(homeTab);
})();


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

        setActiveTab(tab); // Pass the 'tab' to setActiveTab
    });
});
