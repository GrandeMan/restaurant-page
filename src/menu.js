export function createMenuPage() {
    const menuDiv = document.createElement('div');
    menuDiv.id = 'menu-content';
    
    const menuHeader = document.createElement('div');
    menuHeader.classList.add('menu-header');
    const menuPara = document.createElement('p');
    menuPara.classList.add('menu-para');
    menuPara.textContent = "Explore our diverse menu featuring a wide range of appetizers, main courses, desserts, and beverages. From classic favorites to unique chef's specials, there's something for everyone.";
    menuHeader.appendChild(menuPara);

    const imgOverlay = document.createElement('div');
    imgOverlay.classList.add('img-overlay');
    menuHeader.appendChild(imgOverlay);
    let menuImg = document.createElement('img');
    menuImg.classList.add('menu-img')
    menuImg.src = "https://images.unsplash.com/photo-1662982696492-057328dce48b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1137&q=80"
    menuHeader.appendChild(menuImg);
    
    menuDiv.appendChild(menuHeader);


    const menuItems = [
        {
            name: 'Mozzarella Sticks',
            description: 'Golden brown mozzarella sticks served with marinara sauce for dipping.',
            price: '$9.99',
        },
        {
            name: 'Spinach and Artichoke Dip',
            description: 'Creamy spinach and artichoke dip served with warm tortilla chips.',
            price: '$11.99',
        },
        {
            name: 'Onion Rings',
            description: 'Crispy fried onion rings served with a tangy dipping sauce.',
            price: '$10.99',
        },
        {
            name: 'Classic Burger',
            description: 'A juicy beef patty topped with fresh lettuce, tomatoes, onions, and our special sauce. Served with a side of fries.',
            price: '$15.99',
        },
        {
            name: 'Steakhouse Sirloin',
            description: 'A perfectly grilled sirloin steak seasoned to perfection. Served with mashed potatoes and seasonal vegetables.',
            price: '$24.99',
        },
        {
            name: 'Cheesecake Delight',
            description: 'Creamy and indulgent cheesecake topped with your choice of fruit compote or chocolate drizzle.',
            price: '$8.99',
        },
        {
            name: 'Triple Chocolate Brownie',
            description: 'A decadent triple chocolate brownie served with vanilla ice cream and chocolate drizzle.',
            price: '$9.99',
        },
        //Add more options here
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