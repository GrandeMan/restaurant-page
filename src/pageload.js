export function pageLoad () {
        let content = document.createElement('div');
        content.id = 'home-content';

        //Header
        let header = document.createElement('header');
        header.classList.add('header')
        let img = document.createElement('img');
        img.src = "https://www.designatak.com/getattachment/ba919fdb-d1ea-4133-9f3f-040b0da6b8eb/teaser.aspx";
        img.alt = "Dry River Restaurant Interior";
        let h1 = document.createElement('h1');
        h1.textContent = "Welcome to Dry River Restaurant";
        header.appendChild(img);
        header.appendChild(h1);
        content.appendChild(header);
        

        //About Us
        let aboutSection = document.createElement('section');
        aboutSection.classList.add('about')
        let aboutHeader = document.createElement('h2');
        aboutHeader.textContent = "About Us";
        aboutSection.appendChild(aboutHeader);
        let aboutPara = document.createElement('p');
        aboutPara.textContent = "Experience the finest dining at Dry River Restaurant. Our culinary experts craft exquisite dishes that will tantalize your taste buds. Whether you're looking for a romantic dinner, a family gathering, or a special occasion, we have the perfect ambiance and cuisine to make your dining experience unforgettable.";
        aboutSection.appendChild(aboutPara);
        content.appendChild(aboutSection);
     
        // Footer
        let footer = document.createElement('footer');
        let footerParagraph = document.createElement('p');
        footerParagraph.textContent = "\u00A9 2023 Dry River Restaurant";
        footer.appendChild(footerParagraph);
        content.appendChild(footer);

        return content;
};
