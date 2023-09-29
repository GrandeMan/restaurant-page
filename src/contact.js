export function createContactPage() {
    const contactDiv = document.createElement('div');
    contactDiv.id = 'contact-content';
    
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');
    const address = document.createElement('p');
    address.classList.add('address');
    address.textContent = "Visit us at: 123 Main Street, City, State ZIP.";
    contactInfo.appendChild(address);
    const telephone = document.createElement('p');
    telephone.classList.add('telephone');
    telephone.textContent =  `For reservations,call: 123-456-7890`;
    contactInfo.appendChild(telephone);
    
    contactDiv.appendChild(contactInfo);

    return contactDiv;
}
