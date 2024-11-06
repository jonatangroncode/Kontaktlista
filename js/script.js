const contacts = []; 


const registerForm = document.getElementById('add-contact-form');
registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addContact();
});

function addContact() {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('telefone');
    
    const contact = {
        name: nameInput.value,
        phone: phoneInput.value
    };
    contacts.push(contact); // Lägg till kontakten i arrayen

    updateContactList();


    // Töm input-fälten
    nameInput.value = '';
    phoneInput.value = '';
}

function updateContactList() {
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = ''; // Rensa listan för fö

    // Loopa igenom alla kontakter i arrayen och skapa DOM-element för varje
    contacts.forEach((contact, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'contact-item';

        const nameField = document.createElement('input');
        nameField.type = 'text';
        nameField.value = contact.name;
        nameField.disabled = true;

        const phoneField = document.createElement('input');
        phoneField.type = 'text';
        phoneField.value = contact.phone;
        phoneField.disabled = true;

        const editButton = document.createElement('button');
        editButton.innerText = 'Ändra';
        editButton.onclick = () => editContact(index); // TOD skapa funktionen till edit knappen

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Radera';
        deleteButton.onclick = () => deleteContact(index); //TOD Skapa funktionen till knapp

        // Lägg till elementen i listan
        listItem.appendChild(nameField);
        listItem.appendChild(phoneField);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        contactList.appendChild(listItem);
    });
}