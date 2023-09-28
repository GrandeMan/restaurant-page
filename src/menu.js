export function createMenuPage() {
    const menuDiv = document.createElement('div');
    menuDiv.id = 'menu-content';
    
    const menuPara = document.createElement('p');
    menuPara.classList.add('menu-para');
    menuPara.textContent = "Explore our diverse menu featuring a wide range of appetizers, main courses, desserts, and beverages. From classic favorites to unique chef's specials, there's something for everyone.";
    menuDiv.appendChild(menuPara);

    let menuImg = document.createElement('img');
    menuImg.classList.add('menu-img')
    menuImg.src = "https://images.unsplash.com/photo-1662982696492-057328dce48b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1137&q=80"
    menuDiv.appendChild(menuImg);


    const menuItems = [
        {
            name: 'Appetizer 1',
            description: 'Description for appetizer 1.',
            price: '$10.99',
        },
        {
            name: 'Main Course 1',
            description: 'Description for main course 1.',
            price: '$15.99',
        },
        // Add more menu items as needed
    ];

    const menuList = document.createElement('ul');
    menuList.classList.add('menu-list');

    menuItems.forEach((item) => {
        const menuItem = document.createElement('li');
        menuItem.classList.add('menu-item');

        const itemName = document.createElement('h3');
        itemName.textContent = item.name;
        menuItem.appendChild(itemName);

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;
        menuItem.appendChild(itemDescription);

        const itemPrice = document.createElement('span');
        itemPrice.classList.add('menu-price');
        itemPrice.textContent = item.price;
        menuItem.appendChild(itemPrice);

        menuList.appendChild(menuItem);
    });

    menuDiv.appendChild(menuList);

    return menuDiv;
}