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

    nameInput.value = '';
    phoneInput.value = '';
}

function updateContactList() {
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = ''; 

   
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
        editButton.onclick = () => editContact(index, nameField, phoneField, editButton);

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Radera';
        deleteButton.onclick = () => deleteContact(index); //TOD Skapa funktionen till knapp

        listItem.appendChild(nameField);
        listItem.appendChild(phoneField);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        contactList.appendChild(listItem);
    });
}

function editContact(index, nameField, phoneField, editButton) {
    if (editButton.innerText === 'Ändra') {
        nameField.disabled = false;
        phoneField.disabled = false;
        editButton.innerText = 'Spara';
    } else {
        // Uppdatera arrayen med de nya värdena
        contacts[index].name = nameField.value;
        contacts[index].phone = phoneField.value;

        nameField.disabled = true;
        phoneField.disabled = true;
        editButton.innerText = 'Ändra';

        updateContactList(); // Uppdatera DOM efter att man har ändrat värderna
    }
}

