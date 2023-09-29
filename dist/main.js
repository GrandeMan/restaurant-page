(()=>{"use strict";function e(){let e=document.createElement("div");e.id="home-content";let t=document.createElement("header");t.classList.add("header");let n=document.createElement("img");n.classList.add("home-img"),n.src="https://www.designatak.com/getattachment/ba919fdb-d1ea-4133-9f3f-040b0da6b8eb/teaser.aspx",n.alt="Dry River Restaurant Interior";let a=document.createElement("h1");a.textContent="Welcome to Dry River Restaurant",t.appendChild(n),t.appendChild(a),e.appendChild(t);let i=document.createElement("section");i.classList.add("about");let c=document.createElement("h2");c.textContent="About Us",i.appendChild(c);let d=document.createElement("p");d.classList.add("about-para"),d.textContent="Experience the finest dining at Dry River Restaurant. Our culinary experts craft exquisite dishes that will tantalize your taste buds. Whether you're looking for a romantic dinner, a family gathering, or a special occasion, we have the perfect ambiance and cuisine to make your dining experience unforgettable.",i.appendChild(d),e.appendChild(i);let r=document.createElement("footer"),o=document.createElement("p");return o.textContent="© 2023 Dry River Restaurant",r.appendChild(o),e.appendChild(r),e}const t=document.querySelectorAll(".tab"),n=document.getElementById("content");let a=null;function i(e){a&&a.classList.remove("active"),e.classList.add("active"),a=e}n.innerHTML="",n.appendChild(e()),i(document.getElementById("home-tab")),t.forEach((t=>{t.addEventListener("click",(a=>{n.innerHTML="","home-tab"===a.target.id?n.appendChild(e()):"menu-tab"===a.target.id?n.appendChild(function(){const e=document.createElement("div");e.id="menu-content";const t=document.createElement("div");t.classList.add("menu-header");const n=document.createElement("p");n.classList.add("menu-para"),n.textContent="Explore our diverse menu featuring a wide range of appetizers, main courses, desserts, and beverages. From classic favorites to unique chef's specials, there's something for everyone.",t.appendChild(n);const a=document.createElement("div");a.classList.add("img-overlay"),t.appendChild(a);let i=document.createElement("img");i.classList.add("menu-img"),i.src="https://images.unsplash.com/photo-1662982696492-057328dce48b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1137&q=80",t.appendChild(i),e.appendChild(t);const c=document.createElement("ul");return c.classList.add("menu-list"),[{name:"Mozzarella Sticks",description:"Golden brown mozzarella sticks served with marinara sauce for dipping.",price:"$9.99"},{name:"Spinach and Artichoke Dip",description:"Creamy spinach and artichoke dip served with warm tortilla chips.",price:"$11.99"},{name:"Onion Rings",description:"Crispy fried onion rings served with a tangy dipping sauce.",price:"$10.99"},{name:"Classic Burger",description:"A juicy beef patty topped with fresh lettuce, tomatoes, onions, and our special sauce. Served with a side of fries.",price:"$15.99"},{name:"Steakhouse Sirloin",description:"A perfectly grilled sirloin steak seasoned to perfection. Served with mashed potatoes and seasonal vegetables.",price:"$24.99"},{name:"Cheesecake Delight",description:"Creamy and indulgent cheesecake topped with your choice of fruit compote or chocolate drizzle.",price:"$8.99"},{name:"Triple Chocolate Brownie",description:"A decadent triple chocolate brownie served with vanilla ice cream and chocolate drizzle.",price:"$9.99"}].forEach((e=>{const t=document.createElement("li");t.classList.add("menu-item");const n=document.createElement("h3");n.textContent=e.name,t.appendChild(n);const a=document.createElement("p");a.textContent=e.description,t.appendChild(a);const i=document.createElement("span");i.classList.add("menu-price"),i.textContent=e.price,t.appendChild(i),c.appendChild(t)})),e.appendChild(c),e}()):"contact-tab"===a.target.id&&n.appendChild(function(){const e=document.createElement("div");return e.textContent="Visit us at: 123 Main Street, City, State ZIP. For reservations, call: 123-456-7890",e}()),i(t)}))}))})();