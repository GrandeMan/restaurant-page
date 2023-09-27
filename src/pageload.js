function pageLoad () {
    document.addEventListener('DOMContentLoaded', () => {
        let content = document.getElementById('content');

        //Header
        let header = document.createElement('header');
        let h1 = document.createElement('h1');
        h1.textContent = "Welcome to Dry River Restaurant";
        header.appendChild(h1);
        content.appendChild(header);

        //Image
        let img = document.createElement('img');
        img.src = "https://www.designatak.com/getattachment/ba919fdb-d1ea-4133-9f3f-040b0da6b8eb/teaser.aspx";
        img.alt = "Dry River Restaurant Interior";
        content.appendChild(img);

        //About Us
        let aboutSection = document.createElement('section');
        let aboutHeader = document.createElement('h2');
        aboutHeader.textContent = "About Us";
        aboutSection.appendChild(aboutHeader);
        let aboutPara = document.createElement('p');
        aboutPara.textContent = "Experience the finest dining at Dry River Restaurant. Our culinary experts craft exquisite dishes that will tantalize your taste buds. Whether you're looking for a romantic dinner, a family gathering, or a special occasion, we have the perfect ambiance and cuisine to make your dining experience unforgettable.";
        aboutSection.appendChild(aboutPara);
        content.appendChild(aboutSection);

        //Menu
        let menuSection = document.createElement('section');
        let menuHeader = document.createElement('h2');
        menuHeader.textContent = "Menu";
        menuSection.appendChild(menuHeader);
        let menuParagraph = document.createElement('p');
        menuParagraph.textContent = "Explore our diverse menu featuring a wide range of appetizers, main courses, desserts, and beverages. From classic favorites to unique chef's specials, there's something for everyone.";
        menuSection.appendChild(menuParagraph);
        content.appendChild(menuSection);
        
        // Contact Us 
        let contactSection = document.createElement('section');
        let contactHeader = document.createElement('h2');
        contactHeader.textContent = "Contact Us";
        contactSection.appendChild(contactHeader);
        let contactAddress = document.createElement('p');
        contactAddress.textContent = "Visit us at:";
        contactSection.appendChild(contactAddress);
        let address = document.createElement('address');
        address.innerHTML = "123 Main Street<br>City, State ZIP";
        contactSection.appendChild(address);
        let contactPhone = document.createElement('p');
        contactPhone.innerHTML = "For reservations, call: <a href='tel:+1234567890'>123-456-7890</a>";
        contactSection.appendChild(contactPhone);
        content.appendChild(contactSection);
        
        // Footer
        let footer = document.createElement('footer');
        let footerParagraph = document.createElement('p');
        footerParagraph.textContent = "\u00A9 2023 Dry River Restaurant";
        footer.appendChild(footerParagraph);
        content.appendChild(footer);
    });
};

export { pageLoad };